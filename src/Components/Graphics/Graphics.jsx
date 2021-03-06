import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Charts.css";

const Graphics = (props) => {
  const infos = props.symbolsAndCount;
  const data = [];
  Object.entries(infos).map((key, value) => {
    let dt = {
      name: key[0],
      amount: key[1],
    };
    data.push(dt);
    return 0;
  });

  return (
    <div className="Charts">
      <h2>Symbols/Frequency</h2>
      <div className="Chart-Content">
        <BarChart
          width={1400}
          height={500}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Graphics;
