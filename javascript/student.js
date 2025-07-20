document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submitComplaintBtn');
  const viewBtn = document.getElementById('viewComplaintsBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const complaintForm = document.getElementById('complaintForm');
  const complaintText = document.getElementById('complaintText');
  const sendBtn = document.getElementById('sendComplaint');
  const complaintList = document.getElementById('complaintList');
  const complaintsUl = document.getElementById('complaints');

  let complaints = [];

  submitBtn.addEventListener('click', () => {
    complaintForm.classList.remove('hidden');
    complaintList.classList.add('hidden');
  });

  viewBtn.addEventListener('click', () => {
    complaintList.classList.remove('hidden');
    complaintForm.classList.add('hidden');
    renderComplaints();
  });

  sendBtn.addEventListener('click', () => {
    const text = complaintText.value.trim();
    if (text) {
      complaints.push(text);
      complaintText.value = '';
      alert('Complaint submitted!');
    }
  });

  logoutBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  function renderComplaints() {
    complaintsUl.innerHTML = '';
    if (complaints.length === 0) {
      complaintsUl.innerHTML = '<li>No complaints submitted yet.</li>';
    } else {
      complaints.forEach((c, index) => {
        const li = document.createElement('li');
        li.textContent = `#${index + 1}: ${c}`;
        complaintsUl.appendChild(li);
      });
    }
  }
  document.getElementById('logoutBtn').addEventListener('click', () => {
  window.location.href = "/index.html"; // adjust path if needed
});

});
