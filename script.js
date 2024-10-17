// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});

// Handle Form Submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  // Clear error message and show spinner
  document.getElementById('error-message').textContent = '';
  document.getElementById('spinner').style.display = 'block';

  // Simulate loading delay (2 seconds for demo purposes)
  setTimeout(() => {
    // Send POST request to backend (optional)
    const mockUsers = [
      { username: "adminUser", password: "adminPass", role: "admin" },
      { username: "studentUser", password: "studentPass", role: "student" }
    ];

    // Find the user in mock data
    const user = mockUsers.find(user => user.username === username && user.password === password && user.role === role);

    if (user) {
      alert(`Login successful as ${role}`);
      // Role-based redirection
      if (role === 'admin') {
        window.location.href = 'admin_dashboard.html';
      } else if (role === 'student') {
        window.location.href = 'student_dashboard.html';
      }
    } else {
      document.getElementById('error-message').textContent = 'Invalid login credentials. Please try again.';
    }

    // Hide spinner
    document.getElementById('spinner').style.display = 'none';
  }, 2000); // Simulate a delay for demonstration
});
