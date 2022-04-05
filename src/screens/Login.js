import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import '../styles/Login.css'

import firebaseApp from '../firebase/credenciales';
import {getFirestore, doc, setDoc} from "firebase/firestore"

const firestore = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp)
function Login() {

  const [isRegistrando, setIsRegistrando] = useState(false);

  //como debemos trabajar con Firebase, nuestra funcion sera Asincrona
  async function registrarUsuario(email, password, rol){
    //Para utilizar los servicios de firebase, debemos importarlos
    const infoUsuario = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
      ).then((usuarioFirebase)=>{
      return usuarioFirebase;
    });
    console.log(infoUsuario.user.uid);
    const docuRef = await doc(firestore, `usuarios/${infoUsuario.
      user.uid}`);
      setDoc(docuRef, {correo: email, rol:rol});
  }


  function submitHandler(e){
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    console.log(email, password, rol);

    if (isRegistrando){
      //registrar
      registrarUsuario(email, password, rol);
    }else{
      //login
      signInWithEmailAndPassword(auth, email, password)
    }

  }


  return (
    <div className="contenedor">
      <img alt="" src={logo} />
      <h1>{isRegistrando ? "Registrarme" : "Iniciar sesión"}</h1>
      <form className="formFlex" onSubmit={submitHandler}>
        <label>
          Correo electrónico
          <br />
          <br />
          <input className="inputInicio" type="email" id="email" placeholder="Ingrese su correo electronico"/>
        </label>
        <label>
          Contraseña
          <br />
          <br />
          <input className="inputInicio" type="password" id="password" placeholder="Ingrese su contraseña"/>
        </label>
        <label>
          Rol:
          <select id="rol" className="selectRol">
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </label>
        <input className="iniciarSesion"
          type="submit"
          value={isRegistrando ? "Registrar" : "Iniciar Sesión"}
        />
      </form>

      <button className="btnRegistrarme" onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando ? "Ya tengo una cuenta" : "¿Aun no tienes cuenta? ¿Quieres registrarte?"}
      </button>
    </div>
  );
}

export default Login