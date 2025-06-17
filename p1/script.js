let isLogin = false;

let users = JSON.parse(localStorage.getItem("users")) || [];

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById('form-title').innerText = isLogin ? "Login" : "Create Account";
  document.getElementById('toggle-text').innerText = isLogin ? "Don't have an account?" : "Already have an account?";
  document.querySelector('.toggle a').innerText = isLogin ? "Create Account" : "Login";
  document.getElementById('name-group').style.display = isLogin ? "none" : "block";
  document.getElementById('message').innerText = '';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function handleSubmit() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  if (!validateEmail(email)) {
    message.style.color = 'red';
    message.innerText = "Invalid email format.";
    return;
  }

  if (!validatePassword(password)) {
    message.style.color = 'red';
    message.innerText = "Password must be at least 6 characters.";
    return;
  }

  if (isLogin) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      message.style.color = 'green';
      message.innerText = `Welcome ${user.name}!`;
    } else {
      message.style.color = 'red';
      message.innerText = "Access Denied.";
    }
  } else {
    if (!name) {
      message.style.color = 'red';
      message.innerText = "Please enter your name.";
      return;
    }

    const exists = users.find(u => u.email === email);
    if (exists) {
      message.style.color = 'red';
      message.innerText = "Email already registered.";
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    message.style.color = 'green';
    message.innerText = "Account created successfully. You can now login.";
    toggleForm();
  }
}
