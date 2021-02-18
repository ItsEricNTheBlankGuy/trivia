import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var questionNum = 0;
  let [ questionNumber, changeQuestionNumber ] = useState(questionNum);
  let [ answerDisplayed, setAnswerDisplayed ] = useState(false);
  var testQuestion = "test question";
  var correctChoice = data[0].question.correct_choice_index;
  return (
    <div>
      <div className="app">Trivia!</div>
      <Question text={data[0].question.text} answerChoices={data[0].question.choices} />
      <NextQuestion makeItNext={changeQuestionNumber()} />
      <button onClick={()=>setAnswerDisplayed(data[0].question.choices[correctChoice])}>
        Answer
      </button>
      <div>{answerDisplayed}</div>
    </div>
  );
}

export default App;

function Question({ text, answerChoices} ) {
  //answerChoices.map();
  return (
    <div class="questionBox">
      {text}
      <Answer text={"Answer goes here"} />
      {
        answerChoices.map(answer  => (<Answer text={answer} />))
      }
      
      
    </div>);
}

function NextQuestion({ makeItNext }) {
  return (<button onclick={makeItNext}>Next Question</button>);
}

function Answer({ text }) {
  return(
  <div>
    {text}
  </div>);
}

function changeQuestionNumber() {
  questionNumber++;
}


