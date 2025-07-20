window.onload = function () {
  const links = document.querySelectorAll(".sidebar a");
  const sections = document.querySelectorAll(".main-content section");

  // Show only the first section
  sections.forEach((section, index) => {
    section.classList.toggle("active", index === 0);
  });

  // Sidebar navigation click
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === "#") return; // skip logout link
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      sections.forEach(section => {
        section.classList.toggle("active", section.id === targetId);
      });
    });
  });

  // Handle logout immediately
  document.getElementById("logoutLink").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "/index.html"; // adjust path if needed
  });

  // Sample content
  document.getElementById("complain").innerHTML += `
    <table border="1" cellpadding="10" cellspacing="0">
      <tr>
        <th>ID</th>
        <th>User</th>
        <th>Subject</th>
        <th>Status</th>
      </tr>
      <tr>
        <td>COMP-001</td>
        <td>John Doe</td>
        <td>Payment not processed</td>
        <td>Pending</td>
      </tr>
      <tr>
        <td>COMP-002</td>
        <td>Jane Smith</td>
        <td>Account access issue</td>
        <td>Pending</td>
      </tr>
    </table>
  `;

  document.getElementById("checked").innerHTML += `
    <ul>
      <li><strong>COMP-003</strong> – Resolved: Incorrect bill generated</li>
      <li><strong>COMP-004</strong> – Resolved: Profile update issue</li>
    </ul>
  `;
};
