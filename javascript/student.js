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

  const newComplaint = {
    type,
    subject,
    description,
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
      <td class="px-4 py-2 border">${i + 1}</td>
      <td class="px-4 py-2 border">${c.type}</td>
      <td class="px-4 py-2 border font-semibold">${c.subject}</td>
      <td class="px-4 py-2 border">${c.description}</td>
      <td class="px-4 py-2 border">${c.status}</td>
    `;
    tableBody.appendChild(row);
  });
}
function logout() {
  window.location.href = "/index.html"; // Replace with your actual login/home page if different
}
