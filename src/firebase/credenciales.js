// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDvXY-Ezyp31XlFkI8EByFDzoc_3eVTSD4",
  authDomain: "sprint2auth.firebaseapp.com",
  projectId: "sprint2auth",
  storageBucket: "sprint2auth.appspot.com",
  messagingSenderId: "751126430875",
  appId: "1:751126430875:web:59832c59824e818ff2323e",
  measurementId: "G-H7ED4YYTNH",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;