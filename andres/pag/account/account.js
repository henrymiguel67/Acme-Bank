const transactions = [
    { date: "2025-06-01", description: "Depósito inicial", amount: 1000 },
    { date: "2025-06-05", description: "Pago de agua", amount: -120 },
    { date: "2025-06-10", description: "Retiro cajero", amount: -200 },
    { date: "2025-06-12", description: "Pago electricidad", amount: -150 },
  ];
  
  const list = document.getElementById("transactionsList");
  
  transactions.forEach(tx => {
    const li = document.createElement("li");
    const tipo = tx.amount >= 0 ? "+" : "-";
    const formatted = `${tx.date} — ${tx.description}: ${tipo}$${Math.abs(tx.amount).toFixed(2)}`;
    li.textContent = formatted;
    li.style.color = tx.amount >= 0 ? "green" : "red";
    list.appendChild(li);
  });
  