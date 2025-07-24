// Sample complaint data
const complaints = [
  {
    id: 1,
    studentId: "S12345",
    type: "Hostel Maintenance Issues",
    subject: "Broken tap",
    blockNo: "B",
    roomNo: "203",
    description: "The bathroom tap is leaking continuously.",
    image: "https://via.placeholder.com/300x200.png?text=Complaint+Image",
    status: "Pending"
  },
  {
    id: 2,
    studentId: "S23456",
    type: "Wi-Fi / Internet Connectivity Problems",
    subject: "No internet",
    blockNo: "C",
    roomNo: "105",
    description: "No Wi-Fi connectivity in my room.",
    image: "https://via.placeholder.com/300x200.png?text=No+WiFi",
    status: "Processing"
  }
];

// Function to load complaints into table
function renderComplaints() {
  const tbody = document.getElementById("complaintsBody");
  tbody.innerHTML = "";

  complaints.forEach((complaint, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="border px-4 py-3">${index + 1}</td>
      <td class="border px-4 py-3">${complaint.studentId}</td>
      <td class="border px-4 py-3">${complaint.type}</td>
      <td class="border px-4 py-3">${complaint.subject}</td>
      <td class="border px-4 py-3">${complaint.blockNo}</td>
      <td class="border px-4 py-3">${complaint.roomNo}</td>
      <td class="border px-4 py-3">
        ${complaint.description}
        <img src="${complaint.image}" alt="Complaint Image" class="complaint-img">
      </td>
      <td class="border px-4 py-3">
        <span class="px-2 py-1 rounded-full text-white ${getStatusColor(complaint.status)}">${complaint.status}</span>
      </td>
      <td class="border px-4 py-3 text-center">—</td>
    `;

    tbody.appendChild(row);
  });
}

// Helper: status color class
function getStatusColor(status) {
  switch (status) {
    case "Pending": return "bg-yellow-500";
    case "Processing": return "bg-blue-500";
    case "Completed": return "bg-green-600";
    default: return "bg-gray-400";
  }
}

// Logout redirection
function logout() {
  window.location.href = "/index.html";
}

// Init
window.onload = renderComplaints;
