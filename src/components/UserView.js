import React from 'react'
import Html from '../assets/html.png'
import Figma from "../assets/figma.png";
import Ux from "../assets/ux.png";
import Js from "../assets/js.png";
import Csss from "../assets/css.png"
import styled from 'styled-components';
import Footer from './Footer';
import { Link } from 'react-router-dom';

// const navigate = useNavigate();


const ContDiv = styled.div`
  display:flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  /* margin-top: -20px; */
`

const CategoriaDiv = styled.div`
  display: flex;
  gap: 5px;
  margin: 2px 10%;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap-reverse;
  max-height: 100vh;
`;
const BtnBordNon = styled.button`
  border: none;
  cursor: pointer;
`
 const StyleH2 = styled.h2`
  margin: 0 20px;
 `

const pulsar = () => {
  console.log("Click, Click, Click");
  
  
};

function UserView() {

  
  
  return (
    <ContDiv>
      <StyleH2>
        Practica tus conocimientos en la categoría que prefieras
      </StyleH2>
      <CategoriaDiv>
        <div>
          <BtnBordNon>
            <Link to="/preguntas-figma">
              <img alt="" src={Figma} />
            </Link>
          </BtnBordNon>
        </div>
        <div>
          <BtnBordNon>
            <Link to="/preguntas-ux">
              <img alt="" src={Ux} />
            </Link>
          </BtnBordNon>
        </div>
        <div>
          <BtnBordNon>
            <Link to="/preguntas-css">
              <img alt="" src={Csss} />
            </Link>
          </BtnBordNon>
        </div>
        <div>
          <BtnBordNon
            onClick={() => {
              pulsar();
            }}
          >
            <Link to="/preguntas-js">
              <img alt="" src={Js} />
            </Link>
          </BtnBordNon>
        </div>
        <div>
          <BtnBordNon>
            <Link to="/preguntas-html">
              <img alt="" src={Html} />
            </Link>
          </BtnBordNon>
        </div>
      </CategoriaDiv>
      <Footer />
    </ContDiv>
  );
}

export default UserView