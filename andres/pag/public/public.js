document.getElementById("publicForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("serviceName").value;
    const ref = document.getElementById("serviceRef").value;
    const amount = parseFloat(document.getElementById("serviceAmount").value);
  
    if (isNaN(amount) || amount <= 0) {
      alert("Ingrese un monto válido");
      return;
    }
  
    const message = `Pago realizado correctamente a ${name} (Ref: ${ref}) por $${amount.toFixed(2)} USD`;
    document.getElementById("paymentResult").textContent = message;
  
    // Aquí podrías registrar el pago en Firebase si se requiere
  });
  