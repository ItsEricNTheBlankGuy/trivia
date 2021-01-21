import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var testQuestion = "test question";
  return (
    <div>
      <div className="app">Trivia!</div>
      <Question text="Different Text" />
    </div>
  );
}

export default App;

function Question({ text }) {
  return <div>{text}</div>;
}
