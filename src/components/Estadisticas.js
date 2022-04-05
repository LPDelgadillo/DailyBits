import React from 'react'
import Footer from './Footer';
import styled from "styled-components";

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  overflow: hidden;
  gap: 30px;
`;

const H2Perfil = styled.h2`
  position: absolute;
  left: 15%;
  top: 5%;
`;
const SelectEst = styled.select`
  margin-top: 120px;
  border: none;
  font-size: 15px;
`
const UlStyle = styled.ul`
  align-items: center;
`;
const LiStyle = styled.li`
  list-style: none;
  width: 120%;
  margin-top: 5%;
`



const Estadisticas = () => {
  return (
    <DivFlex>
      <H2Perfil>Estadisticas</H2Perfil>
      <SelectEst>
        <option>Ultimos 7 días</option>
        <option>Hoy</option>
      </SelectEst>
      <UlStyle>
        <LiStyle>
          Tiempo de estudio <span>1</span>
        </LiStyle>
        <LiStyle>
          Respuestas contestadas <span>40</span>
        </LiStyle>
        <LiStyle>
          Respuestas correctas <span>20</span>
        </LiStyle>
        <LiStyle>
          Respuestas Incorrectas <span>20</span>
        </LiStyle>
      </UlStyle>
      <Footer />
    </DivFlex>
  );
}
export default Estadisticas