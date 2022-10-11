import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quizdata = useLoaderData();
  const { data } = quizdata;

  return (
    <div>
      <div className="flex items-center mx-4 my-16">
        <div>
          <p className="font-semibold text-left px-36">
            <span className="font-bold text-4xl">
              Welcome to <br />
              Interactive Quiz Station
            </span>
            <br />
            Quiz Station is a web-based audience engagement cloud platform for
            participating interactive quizzes at in-person, virtual and hybrid
            events. <br />
            No app installation required.
          </p>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/quiz-word-concept_23-2147844150.jpg?w=740&t=st=1665509186~exp=1665509786~hmac=451624bd984d474caef1f493cbf06581668b3f185c90af5835c6cf36853276ed"
            alt=""
          />
        </div>
      </div>
      <div className="md:grid grid-cols-3  gap-4">
        {data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
