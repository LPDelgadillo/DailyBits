import React, { Component } from 'react'
import { Routes,  Route, BrowserRouter } from 'react-router-dom'
import Estadisticas from '../components/Estadisticas';
import Perfil from '../components/Perfil';
import Questions from '../components/Questions';
import QuestionsCSS from '../components/QuestionsCSS';
import QuestionsFigma from '../components/QuestionsFigma';
import QuestionsHTML from '../components/QuestionsHTML';
import QuestionsUX from '../components/QuestionsUx';
import App from '../containers/App'
import Home from '../screens/Home';
import Login from '../screens/Login';

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/preguntas-js" element={<Questions />} />
            <Route path="/preguntas-css" element={<QuestionsCSS />} />
            <Route path="/preguntas-html" element={<QuestionsHTML />} />
            <Route path="/preguntas-ux" element={<QuestionsUX />} />
            <Route path="/preguntas-figma" element={<QuestionsFigma />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/estadisticas" element={<Estadisticas />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}