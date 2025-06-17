document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const accountNumber = "ACME-" + Math.floor(Math.random() * 10000000);
    const createdAt = new Date().toLocaleString();
  
    // Simular envío a backend aquí
  
    alert(`Cuenta creada exitosamente\nNúmero de cuenta: ${accountNumber}\nFecha de creación: ${createdAt}`);
    window.location.href = "login.html";
  });
  