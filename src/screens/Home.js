import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import firebaseApp from '../firebase/credenciales'

import AdmminView from "../components/AdminView"
import UserView from "../components/UserView"
import styled from "styled-components";

const BtnCerrar = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  color: #ab5f4f;
`;

const auth = getAuth(firebaseApp)

function Home({user}) {
  return (
    <div className='contHome'>
      <BtnCerrar className='btnCerrarSesion' onClick={()=> signOut(auth)}>Cerrar sesion</BtnCerrar>

      {user.rol==="admin"?<AdmminView/> : <UserView/>}
    </div>
  )
}

export default Home