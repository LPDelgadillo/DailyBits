import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import styled from 'styled-components';
import firebaseApp from '../firebase/credenciales';
import Footer from './Footer'
import imagen from '../assets/avatar.webp'



const BtnCerrar = styled.button`
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #ab5f4f;
`;
export const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-height: 100vh;
  align-items: center;
  overflow: hidden;
  gap: 30px;
`
const H2Perfil = styled.h2`
position: absolute;
  left: 15%;
  top: 5%;
`;
const ImgPerfil = styled.img`
  margin-top: 12%;

`

const auth = getAuth(firebaseApp);

const Perfil = () => {
  return (
    <DivFlex>
      <H2Perfil>Perfil</H2Perfil>

      <ImgPerfil alt="" src={imagen} height="210px" />
      <h3>Lizeth Paola Delgadillo Robayo</h3>
      <h4>Lizdelga001@gmail.com</h4>
      <BtnCerrar className="btnCerrarSesion" onClick={() => signOut(auth)}>
        Cerrar sesion
      </BtnCerrar>
      <Footer />
    </DivFlex>
  );
}
 
export default Perfil