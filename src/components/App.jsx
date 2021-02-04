import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var testQuestion = "test question";
  var questionNum = 0;
  return (
    <div>
      <div className="app">Trivia!</div>
      <Question text={data[0].question.text} />
      <NextQuestion />
    </div>
  );
}

export default App;

function Question({ text, answerChoices} ) {
  answerChoices.map();
  return (
    <div class="questionBox">
      {text}
      <Answer text={"Answer goes here"} {answerChoices} />
      
    </div>);
}

function NextQuestion( ) {
  return (<button onclick="myFunction()">Click me</button>);
}

function Answer({ text }) {
  return(
  <div>
    {text}
  </div>);
}