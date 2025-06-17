document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const idType = document.getElementById("idType").value;
    const idNumber = document.getElementById("idNumber").value;
    const password = document.getElementById("password").value;
  
    // Simulación de validación
    if (idType === "CC" && idNumber === "123" && password === "admin") {
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("errorMsg").textContent = "No se pudo validar su identidad";
    }
  });
  