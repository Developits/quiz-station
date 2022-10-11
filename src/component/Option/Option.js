import React from "react";

const Option = ({ option }) => {
  return (
    <div className="bg-[#AAC4FF] p-7 mt-4 rounded-xl border-2 border-sky-500">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      ></input>
      <label
        for="default-radio-1"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {option}
      </label>
    </div>
  );
};

export default Option;
