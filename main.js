document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.getElementById('loginBtn');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const showRegister = document.getElementById('showRegister');
  const showLogin = document.getElementById('showLogin');

  // Show the login form when the "Login" button is clicked
  loginBtn.addEventListener('click', function () {
    loginForm.style.display = 'flex'; // Show login form
    registerForm.style.display = 'none'; // Hide register form
  });

  // Show the register form when the "Register" link is clicked on the login form
  showRegister.addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.style.display = 'none'; // Hide login form
    registerForm.style.display = 'flex'; // Show register form
  });

  // Show the login form when the "Login" link is clicked on the register form
  showLogin.addEventListener('click', function (e) {
    e.preventDefault();
    registerForm.style.display = 'none'; // Hide register form
    loginForm.style.display = 'flex'; // Show login form
  });
});