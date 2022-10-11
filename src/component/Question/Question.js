import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import Option from "../Option/Option";

const Question = ({ QuizQ }) => {
  const { question, options } = QuizQ;
  return (
    <div className="bg-[#D2DAFF] my-2 mx-32 rounded-2xl p-5">
      <div>
        <h1 className="font-bold text-center">Q: {question}</h1>
        <EyeIcon className="h-6 w-6" />
      </div>
      <div className="mx-3 text-justify grid grid-cols-2 gap-5">
        {options.map((option, idx) => (
          <Option key={idx} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
