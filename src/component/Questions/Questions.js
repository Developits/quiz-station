import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const questionData = useLoaderData();
  const { questions } = questionData.data;
  return (
    <div >
      <h1>This is questions</h1>
      {questions.map((Q, idx) => (
        <Question key={idx} Q={Q}></Question>
      ))}
    </div>
  );
};

export default Questions;
