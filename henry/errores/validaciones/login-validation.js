document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const idType = document.getElementById("idType").value;
    const idNumber = document.getElementById("idNumber").value.trim();
    const password = document.getElementById("password").value;
    const errorDiv = document.getElementById("loginError");
  
    if (!idType || !idNumber || !password) {
      errorDiv.textContent = "Todos los campos son obligatorios.";
      return;
    }
  
    // Usuario de prueba (simulado)
    const validUser = {
      idType: "cc",
      idNumber: "123456789",
      password: "1234"
    };
  
    if (
      idType === validUser.idType &&
      idNumber === validUser.idNumber &&
      password === validUser.password
    ) {
      errorDiv.textContent = "";
      window.location.href = "dashboard.html";
    } else {
      errorDiv.textContent = "Credenciales incorrectas. Intenta nuevamente.";
    }
  });
  