function generateCertificate() {
    const now = new Date();
    const certificate = `
      <h2>Certificado de Cuenta Bancaria</h2>
      <p>Se certifica que el titular mantiene una cuenta activa en Acme Bank.</p>
      <p>Fecha de emisión: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}</p>
      <p>Código de validación: ${Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
    `;
  
    document.getElementById("certificate").innerHTML = certificate;
  }
  