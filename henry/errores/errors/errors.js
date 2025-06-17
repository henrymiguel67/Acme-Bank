document.getElementById("uiFixForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
  
    if (nombre.trim() === "" || email.trim() === "") {
      document.getElementById("mensaje").textContent = "Por favor, completa todos los campos.";
      document.getElementById("mensaje").style.color = "red";
      return;
    }
  
    document.getElementById("mensaje").textContent = "Formulario enviado correctamente.";
    document.getElementById("mensaje").style.color = "green";
  });
  