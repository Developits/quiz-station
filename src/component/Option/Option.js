import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, correctAnswer }) => {
  const handleCorrectAnswer = () => {
    if (option === correctAnswer) {
      toast("Correct Answer");
    } else {
      toast("Wrong Answer");
    }
  };
  return (
    <div>
      <div className="bg-[#AAC4FF] p-7 mt-4 rounded-xl  hover:bg-[#B1B2FF] border-2 border-sky-500">
        <input
          onClick={handleCorrectAnswer}
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        ></input>
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {option}
        </label>
      </div>
    </div>
  );
};

export default Option;
