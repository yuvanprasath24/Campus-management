document.addEventListener('DOMContentLoaded', () => {
  const selectionScreen = document.getElementById('selectionScreen');
  const loginForm = document.getElementById('loginForm');
  const studentLoginBtn = document.getElementById('studentLoginBtn');
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const parentLoginBtn = document.getElementById('parentLoginBtn');
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
    showLogin('bg-blue-600', 'hover:bg-blue-700');
  });

  adminLoginBtn.addEventListener('click', () => {
    currentUserType = 'admin';
    loginHeading.textContent = 'Admin Login';
    userIdField.placeholder = 'Admin ID';
    userIdField.classList.remove('hidden');
    showLogin('bg-green-600', 'hover:bg-green-700');
  });

  parentLoginBtn.addEventListener('click', () => {
    currentUserType = 'parent';
    loginHeading.textContent = 'Parent Login';
    userIdField.placeholder = 'Student ID';
    userIdField.classList.remove('hidden');
    showLogin('bg-purple-600', 'hover:bg-purple-700');
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
      window.location.href = "/studentDashBoard/student.html";
    } else if (currentUserType === 'admin' && validAdminEmails.includes(email) && password === testPassword) {
      window.location.href = "/adminDashBoard/admin.html";
    } else if (currentUserType === 'parent' && validStudentEmails.includes(email) && password === testPassword) {
      window.location.href = "/parentsDashBoard/parents.html";
    } else {
      showError('Invalid credentials');
    }
  });

  function showLogin(bgClass, hoverClass) {
    selectionScreen.classList.add('hidden');
    loginForm.classList.remove('hidden');
    submitLogin.className = `w-full text-white px-4 py-2 rounded-xl shadow ${bgClass} ${hoverClass}`;
  }

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    setTimeout(() => errorMessage.classList.remove('show'), 3000);
  }
});
