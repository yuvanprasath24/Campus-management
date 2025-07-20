// Password toggle with icon
document.querySelectorAll(".show-password").forEach(button => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    const icon = button.querySelector("i");
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  });
});

// Move complaint to 'On Process'
document.addEventListener("click", function (e) {
  if (e.target.closest(".btn-process")) {
    const row = e.target.closest("tr");
    const statusCell = row.querySelector("td:nth-child(5)");
    statusCell.innerHTML = `<span class="status-badge status-processing">Processing</span>`;

    const actionCell = row.querySelector(".action-buttons") || row.querySelector("td:last-child");
    actionCell.innerHTML = `
      <button class="btn btn-action btn-complete">
        <i class="fas fa-check"></i> Complete
      </button>
    `;

    document.getElementById("process-complaints").appendChild(row);
    showSection("#onProcess");
  }

  // Move complaint to 'Completed'
  if (e.target.closest(".btn-complete")) {
    const row = e.target.closest("tr");
    const statusCell = row.querySelector("td:nth-child(5)") || row.querySelector("td:nth-child(4)");
    statusCell.innerHTML = `<span class="status-badge status-completed">Completed</span>`;

    const actionCell = row.querySelector("td:last-child");
    if (actionCell) actionCell.remove();

    document.getElementById("completed-complaints").appendChild(row);
    showSection("#completed");
  }

  // Logout
  if (e.target.closest("#logoutLink")) {
    e.preventDefault();
    // if (confirm("Are you sure you want to log out?")) {
      // alert("Logged out!");
      window.location.href = "/index.html"; // Redirect to login page
    // }
  }
});

// Student Register Form
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("studentName").value;
  const id = document.getElementById("studentId").value;
  const email = document.getElementById("studentEmail").value;
  alert(`Student ${name} (${id}) registered with email ${email}`);
  this.reset();
});

// Section toggling
function showSection(id) {
  document.querySelectorAll("section").forEach(section => {
    section.style.display = "none";
  });
  const target = document.querySelector(id);
  if (target) target.style.display = "block";
}

// Show default section
window.addEventListener("DOMContentLoaded", () => {
  showSection("#complain");
});

// Sidebar navigation
document.querySelectorAll(".sidebar a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    showSection(targetId);
  });
});
