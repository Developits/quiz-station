import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import Option from "../Option/Option";

const Question = ({ QuizQ, notify }) => {
  const { question, options, correctAnswer } = QuizQ;
  return (
    <div className="bg-[#D2DAFF] my-2 mx-32 rounded-2xl p-5">
      <div className="flex justify-between mx-4 py-6 items-center">
        <h1 className="font-bold text-center">Q: {question}</h1>
        <EyeIcon onClick={() => notify(correctAnswer)} className="h-6 w-6" />
      </div>
      <div className="md:grid grid-cols-2 gap-5 mx-3 text-justify ">
        {options.map((option, idx) => (
          <Option
            key={idx}
            correctAnswer={correctAnswer}
            option={option}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
