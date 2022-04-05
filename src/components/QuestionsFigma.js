import React, { Component } from "react";
import { questionFigma } from "../data/Preguntas";
import Character from "../assets/caracters.png";
import "../styles/Questios.css";

export default class QuestionsFigma extends Component {
  constructor() {
    super();
    this.state = {
      numberQuestion: 0,
      question: {
        question: "",
        imagen: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
      },
      score: 0,
      vidas: 5,
      answerSelect: "",
    };
  }
  componentDidMount() {
    const currentQuizData = questionFigma[this.state.numberQuestion];
    const currentVidas = questionFigma[this.state.vidas];
    this.setState({
      question: {
        question: currentQuizData.question,
        a: currentQuizData.a,
        b: currentQuizData.b,
        c: currentQuizData.c,
        d: currentQuizData.d,
        correct: currentQuizData.correct,
        currentVidas,
      },
    });
  }
  onChanged = (e) => {
    // console.log(e)
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.value);
    this.setState({
      answerSelect: e.currentTarget.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (this.state.answerSelect === this.state.question.correct) {
      this.setState({
        score: this.state.score + 1,
      });
    } else {
      this.setState({
        vidas: this.state.vidas - 1,
      });
    }
    if (this.state.numberQuestion < questionFigma.length) {
      this.componentDidMount();
    } else {
      console.log(this.state.score);
    }
  };

  render() {
    console.log(this.state.answerSelect);
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h2>
          {this.state.vidas} <span>❤</span>
        </h2>
        <div>
          <div className="flex">
            <img alt="" src={Character} />
            <h2 className="pregunta">{this.state.question.question}</h2>
          </div>
          <div className="respuestas">
            <input
              className="selectPregunta"
              type="radio"
              name={`respuestas`}
              id={this.state.question.a}
              value={this.state.question.a}
              onChange={this.onChanged}
            />
            <label className="labelPregunta" for={this.state.question.a}>
              {this.state.question.a}
            </label>
            <input
              className="selectPregunta"
              type="radio"
              name={`respuestas`}
              id={this.state.question.b}
              value={this.state.question.b}
              onChange={this.onChanged}
            />
            <label className="labelPregunta" for={this.state.question.b}>
              {this.state.question.b}
            </label>
            <input
              className="selectPregunta"
              type="radio"
              name={`respuestas`}
              id={this.state.question.c}
              value={this.state.question.c}
              onChange={this.onChanged}
            />
            <label className="labelPregunta" for={this.state.question.c}>
              {this.state.question.c}
            </label>
          </div>
        </div>
        <button
          className="envResp"
          type="submit"
          onClick={() => {
            //Hacer la verificacion de las vidas;
            // if (this.state.vidas <= 0) {
            //   console.log("No tienes vidas")
            // }
            if (this.state.numberQuestion < questionFigma.length) {
              this.setState({
                numberQuestion: this.state.numberQuestion + 1,
              });
            }
          }}
        >
          COMPROBAR
        </button>
        <h2 className="dispNone">Has perdido</h2>
        <h2 style={{ textAlign: "center" }}>
          Pregunta
          {this.state.numberQuestion} de {questionFigma.length}
        </h2>
      </form>
    );
  }
}