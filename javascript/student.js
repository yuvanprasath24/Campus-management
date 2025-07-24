let complaints = [];

function showSection(sectionId) {
  document.getElementById('submitSection').classList.add('hidden');
  document.getElementById('viewSection').classList.add('hidden');
  document.getElementById(sectionId).classList.remove('hidden');
}

function submitComplaint(e) {
  e.preventDefault();

  const studentId = document.getElementById('studentid').value;
  const type = document.getElementById('type').value;
  const subject = document.getElementById('subject').value;
  const blockNo = document.getElementById('blockNo').value;
  const roomNo = document.getElementById('roomNo').value;
  const description = document.getElementById('description').value;
  const imageInput = document.getElementById('image');
  const imageFile = imageInput.files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const imageData = imageFile ? reader.result : "";

    const complaint = {
      studentId,
      type,
      subject,
      blockNo,
      roomNo,
      description,
      image: imageData,
      status: "Pending"
    };

    complaints.push(complaint);
    updateComplaintsTable();
    document.querySelector('.complaint-form').reset();
    alert("Complaint submitted successfully!");
  };

  if (imageFile) {
    reader.readAsDataURL(imageFile);
  } else {
    reader.onload(); // trigger manually if no image
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
