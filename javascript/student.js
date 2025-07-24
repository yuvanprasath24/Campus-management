let complaints = [];

function showSection(sectionId) {
  document.getElementById('submitSection').classList.add('hidden');
  document.getElementById('viewSection').classList.add('hidden');
  document.getElementById(sectionId).classList.remove('hidden');
}

function submitComplaint(e) {
  e.preventDefault();

  const type = document.getElementById('type').value;
  const subject = document.getElementById('subject').value;
  const description = document.getElementById('description').value;
  const imageInput = document.getElementById('image');
  const imageURL = imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : null;

  const newComplaint = {
    type,
    subject,
    description,
    image: imageURL,
    status: 'Pending'
  };

  complaints.push(newComplaint);
  e.target.reset();
  alert('Complaint submitted successfully!');
  renderComplaints();
  showSection('viewSection');
}

function renderComplaints() {
  const tableBody = document.getElementById('complaintsTableBody');
  tableBody.innerHTML = '';

  if (complaints.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" class="px-4 py-2 text-gray-500">No complaints submitted yet.</td></tr>`;
    return;
  }

  complaints.forEach((c, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${c.type}</td>
      <td>${c.subject}</td>
      <td>
        <p>${c.description}</p>
        ${c.image ? `<img src="${c.image}" class="desc-img" onclick="showFullImage('${c.image}')">` : ''}
      </td>
      <td>${c.status}</td>
    `;
    tableBody.appendChild(row);
  });
}

function logout() {
  window.location.href = "/index.html";
}

function showFullImage(src) {
  const imgWindow = window.open("");
  imgWindow.document.write(`<img src="${src}" style="width:90%;margin:20px auto;display:block;">`);
}
