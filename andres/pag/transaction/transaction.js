// Simulación de datos. En una app real, estos vendrían de Firebase o backend.
const summaryData = {
    accountNumber: "0123456789",
    accountHolder: "María Pérez",
    creationDate: "2025-06-13",
    lastTransaction: "Depósito de $500.00"
  };
  
  document.getElementById("accountNumber").textContent = summaryData.accountNumber;
  document.getElementById("accountHolder").textContent = summaryData.accountHolder;
  document.getElementById("creationDate").textContent = summaryData.creationDate;
  document.getElementById("lastTransaction").textContent = summaryData.lastTransaction;
  