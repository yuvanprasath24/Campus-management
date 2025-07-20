document.addEventListener('DOMContentLoaded', () => {
  const selectionScreen = document.getElementById('selectionScreen');
  const loginForm = document.getElementById('loginForm');
  const studentLoginBtn = document.getElementById('studentLoginBtn');
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const submitLogin = document.getElementById('submitLogin');
  const backBtn = document.getElementById('backBtn');
  const errorMessage = document.getElementById('errorMessage');
  const form = document.getElementById('actualLoginForm');
  const loginHeading = document.getElementById('loginHeading');
  const userIdField = document.getElementById('userId');

  let currentUserType = null;

  // ✅ Replace with your valid emails and password
  const validStudentEmails = ['student1@example.com', 'student2@example.com'];
  const validAdminEmails = ['admin1@example.com', 'admin2@example.com'];
  const testPassword = 'test123';

  studentLoginBtn.addEventListener('click', () => {
    currentUserType = 'student';
    loginHeading.textContent = 'Student Login';
    userIdField.placeholder = 'Student ID';
    userIdField.classList.remove('hidden');
    showLogin('bg-blue-500', 'hover:bg-blue-600');
  });

  adminLoginBtn.addEventListener('click', () => {
    currentUserType = 'admin';
    loginHeading.textContent = 'Admin Login';
    userIdField.placeholder = 'Admin ID';
    userIdField.classList.remove('hidden');
    showLogin('bg-green-500', 'hover:bg-green-600');
  });

  backBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    selectionScreen.classList.remove('hidden');
    errorMessage.classList.remove('show');
    form.reset();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const userId = userIdField.value.trim();

    if (!email || !password || !userId) {
      showError('All fields are required');
      return;
    }

    if (currentUserType === 'student' && validStudentEmails.includes(email) && password === testPassword) {
      // ✅ Redirect to student dashboard
      window.location.href = "/studentDashBoard/student.html";
    } else if (currentUserType === 'admin' && validAdminEmails.includes(email) && password === testPassword) {
      // ✅ Redirect to admin dashboard
      window.location.href = "/adminDashBoard/admin.html";
    } else {
      showError('Invalid credentials');
    }
  });

  function showLogin(bgClass, hoverClass) {
    selectionScreen.classList.add('hidden');
    loginForm.classList.remove('hidden');
    submitLogin.className = `w-full text-white px-4 py-2 rounded ${bgClass} ${hoverClass}`;
  }

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    setTimeout(() => errorMessage.classList.remove('show'), 3000);
  }
});
