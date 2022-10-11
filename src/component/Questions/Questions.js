import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const questionData = useLoaderData();
  const { questions } = questionData.data;
  console.log(questions);
  return (
    <div>
      <h1>This is questions</h1>
      {questions.map((QuizQ) => (
        <Question key={QuizQ.id} QuizQ={QuizQ}></Question>
      ))}
    </div>
  );
};

export default Questions;
