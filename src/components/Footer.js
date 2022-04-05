import React from 'react'
import styled from "styled-components";
import IconHom from "../assets/home.png";
import IconEst from "../assets/estadisticas.png";
import IconPerfil from "../assets/perfil.png";
import { Link } from 'react-router-dom';
import '../styles/Footer.css'

const FooterStyle = styled.footer`
  background-color: #737f86;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;
const Icons = styled.img`
  color: white;
  background-color: #737f86;
  object-fit: contain;
  margin: 0 50px;
  width: 30px;
  cursor: pointer;
`;


const Footer = () => {
  return (
    <FooterStyle>

       <Link className='link' to="/"><Icons alt="" src={IconHom} /></Link>
      <Link className='link' to="/estadisticas"><Icons alt="" src={IconEst} /></Link>
      <Link className='link1' to="/perfil"><Icons alt="" src={IconPerfil} /></Link>
    </FooterStyle>
  );
}

export default Footer