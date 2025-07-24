let complaints = [];

function showSection(sectionId) {
  document.getElementById('submitSection').classList.add('hidden');
  document.getElementById('viewSection').classList.add('hidden');
  document.getElementById(sectionId).classList.remove('hidden');
}

//registers complaints
async function submitComplaint(e) {
  e.preventDefault();

  const studentId = document.getElementById('studentid').value;
  const type = document.getElementById('type').value;
  const subject = document.getElementById('subject').value;
  const blockNo = document.getElementById('blockNo').value;
  const roomNo = document.getElementById('roomNo').value;
  const description = document.getElementById('description').value;
  const imageInput = document.getElementById('image');
  const imageFile = imageInput.files[0];

  const formData = new FormData();
  formData.append("complaintType", type);
  formData.append("studentId", studentId);
  formData.append("complaintSubject", subject);
  formData.append("complaintDescription", description);
  formData.append("complaintStatus", "Pending"); // Default status
  formData.append("complaintRoomNumber", roomNo);
  formData.append("complaintBlockNUmber", blockNo);
  if (imageFile) {
    formData.append("image", imageFile);
  }

  try {
    const response = await fetch("http://localhost:8080/student/registerComplaint", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Complaint registration failed");
    }

    const result = await response.text();
    alert(result);
    document.querySelector('.complaint-form').reset();
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong while submitting the complaint.");
  }
}


function updateComplaintsTable() {
  const tbody = document.getElementById('complaintsTableBody');
  tbody.innerHTML = "";

  complaints.forEach((c, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${c.studentId}</td>
      <td>${c.type}</td>
      <td>${c.subject}</td>
      <td>${c.blockNo}</td>
      <td>${c.roomNo}</td>
      <td>
        <p>${c.description}</p>
         ${c.image ? `<img src="${c.image}" alt="Complaint Image" class="desc-img" />` : ""}
      </td>
      <td>${c.status}</td>
    `;

    tbody.appendChild(row);
  });
}

function logout() {
  window.location.href = "/index.html";
}
