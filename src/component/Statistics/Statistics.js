import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const quizdata = useLoaderData();
  console.log(quizdata);
  return (
    <div className="text-center font-bold text-2xl mt-10">
      <h1>This is statistics of Quiz questions.</h1>
      <LineChart
        className="mx-auto mt-32"
        width={600}
        height={350}
        data={quizdata.data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Statistics;
