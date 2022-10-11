import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const quizdata = useLoaderData();
  const { data } = quizdata;
  console.log(quizdata, data);
  return (
    <div>
      <h1>This is home.</h1>
    </div>
  );
};

export default Home;
