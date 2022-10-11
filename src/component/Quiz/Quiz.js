import React from "react";

const Quiz = ({ quiz }) => {
  const { name, logo, total } = quiz;
  return (
    <div className="border-2 border-[#B1B2FF] rounded-xl p-2 m-2">
      <img className="border-gray-200 border-2 rounded" src={logo} alt="" />
      <div className="flex  justify-around items-center m-2">
        <p>{name}</p>
        <p>Total quiz= {total}</p>
        <button className="bg-[#AAC4FF] p-2 rounded">Go to quiz</button>
      </div>
    </div>
  );
};

export default Quiz;
