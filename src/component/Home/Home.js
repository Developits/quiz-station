import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quizdata = useLoaderData();
  const { data } = quizdata;
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-4  gap-4">
        {data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;