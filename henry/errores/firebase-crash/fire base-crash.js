// Importar Firebase correctamente en entorno moderno
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

// 🔥 FIX: Verificamos que no haya inicialización duplicada
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  console.log("✅ Firebase inicializado correctamente.");
  document.getElementById("status").textContent = "Conexión establecida con Firebase.";
} else {
  console.warn("⚠️ Firebase ya estaba inicializado.");
  document.getElementById("status").textContent = "Firebase ya estaba conectado.";
}

// Inicializar Auth si es necesario
const auth = getAuth(app);
