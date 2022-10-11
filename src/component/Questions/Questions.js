import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const questionData = useLoaderData();
  const { questions, name } = questionData.data;
  const notify = (answer) => {
    toast(`${answer}`);
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="font-bold text-3xl m-9">Quiz for {name}</h1>
      {questions.map((QuizQ) => (
        <Question key={QuizQ.id} notify={notify} QuizQ={QuizQ}></Question>
      ))}
    </div>
  );
};

export default Questions;
