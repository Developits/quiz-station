import React from "react";

const Quiz = ({ quiz }) => {
  const { name, logo, total } = quiz;
  return (
    <div>
      <img src={logo} alt="" />
      <p>{name}</p>
      <p>{total}</p>
    </div>
  );
};

export default Quiz;
