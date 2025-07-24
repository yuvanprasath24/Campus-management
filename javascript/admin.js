// Sample complaints data with Student ID
let complaints = [
  {
    id: 1,
    studentId: "S101",
    type: "Wi-Fi / Internet Connectivity Problems",
    subject: "Slow Internet",
    block: "B-Block",
    room: "204",
    description: "Internet disconnects frequently.",
    image: "https://via.placeholder.com/250x150",
    status: "Pending"
  },
  {
    id: 2,
    studentId: "S102",
    type: "Hostel Maintenance",
    subject: "Broken Fan",
    block: "A-Block",
    room: "101",
    description: "Ceiling fan not working.",
    image: "https://via.placeholder.com/250x150",
    status: "On Process"
  },
  {
    id: 3,
    studentId: "S103",
    type: "Library",
    subject: "Book Unavailable",
    block: "C-Block",
    room: "305",
    description: "Requested book not available.",
    image: "https://via.placeholder.com/250x150",
    status: "Completed"
  }
];

// Render complaints to respective sections
function renderComplaints() {
  const pending = document.getElementById("pending-complaints");
  const process = document.getElementById("process-complaints");
  const completed = document.getElementById("completed-complaints");

  pending.innerHTML = "";
  process.innerHTML = "";
  completed.innerHTML = "";

  complaints.forEach((c, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${c.id}</td>
      <td>${c.studentId}</td>
      <td>${c.type}</td>
      <td>${c.subject}</td>
      <td>${c.block}</td>
      <td>${c.room}</td>
      <td>
        ${c.description}<br/>
        <img src="${c.image}" class="desc-img" alt="Complaint Image">
      </td>
      <td><span class="status-badge status-${c.status.toLowerCase().replace(" ", "-")}">${c.status}</span></td>
      ${getActionButtons(index, c.status)}
    `;

    if (c.status === "Pending") pending.appendChild(row);
    else if (c.status === "On Process") process.appendChild(row);
    else completed.appendChild(row);
  });
}

// Return buttons based on status
function getActionButtons(index, status) {
  if (status === "Pending") {
    return `<td class="action-buttons">
      <button class="btn btn-action btn-process" onclick="markAsProcessing(${index})">On Process</button>
      <button class="btn btn-action btn-complete" onclick="markAsCompleted(${index})">Completed</button>
    </td>`;
  } else if (status === "On Process") {
    return `<td class="action-buttons">
      <button class="btn btn-action btn-complete" onclick="markAsCompleted(${index})">Completed</button>
    </td>`;
  } else {
    return `<td>-</td>`;
  }
}

// Status change handlers
function markAsProcessing(index) {
  complaints[index].status = "On Process";
  renderComplaints();
  showSection("#onProcess");
}

function markAsCompleted(index) {
  complaints[index].status = "Completed";
  renderComplaints();
  showSection("#completed");
}

// Show/hide sections
function showSection(id) {
  document.querySelectorAll("section").forEach(section => {
    section.style.display = "none";
  });
  const target = document.querySelector(id);
  if (target) target.style.display = "block";
}

// Sidebar nav link behavior
document.querySelectorAll(".sidebar a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    showSection(targetId);
  });
});

// Password toggle
document.querySelectorAll(".show-password").forEach(button => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    const icon = button.querySelector("i");
    input.type = input.type === "password" ? "text" : "password";
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  });
});

// Register form
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.getElementById("studentId").value;
  const email = document.getElementById("studentEmail").value;
  alert(`Student ${id} registered with email ${email}`);
  this.reset();
});

// Logout
document.getElementById("logoutLink").addEventListener("click", e => {
  e.preventDefault();
  window.location.href = "/index.html";
});

// On page load
window.addEventListener("DOMContentLoaded", () => {
  renderComplaints();
  showSection("#complain");
});
