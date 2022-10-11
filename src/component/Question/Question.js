import React from "react";
import Option from "../Option/Option";

const Question = ({ Q }) => {
  const { question, options } = Q;
  return (
    <div className="bg-slate-300 my-2 mx-32 rounded-2xl p-5">
      <h1>Q: {question}</h1>
      <div className="mx-3">
        {options.map((option, idx) => (
          <Option key={idx} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
