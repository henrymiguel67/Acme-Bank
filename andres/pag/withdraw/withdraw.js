document.getElementById("withdrawForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const amount = parseFloat(document.getElementById("withdrawAmount").value);
    const message = document.getElementById("withdrawMessage");
  
    if (isNaN(amount) || amount <= 0) {
      message.textContent = "Por favor ingresa un monto válido.";
      message.style.color = "red";
      return;
    }
  
    // Aquí iría la lógica real para validar el saldo y actualizarlo
  
    message.textContent = `Retiro exitoso por $${amount.toFixed(2)}`;
    message.style.color = "green";
  
    document.getElementById("withdrawForm").reset();
  });
  