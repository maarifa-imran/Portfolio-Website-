// Predefined username and password (for demonstration purposes)
const validCredentials = {
    username: "admin",
    password: "password123",
  };
  
  // Handle form submission
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check credentials
    if (username === validCredentials.username && password === validCredentials.password) {
      alert("Login successful!");
      window.location.href = "portfolio.html"; // Redirect to the portfolio page
    } else {
      document.getElementById("errorMessage").style.display = "block";
    }
  });
  