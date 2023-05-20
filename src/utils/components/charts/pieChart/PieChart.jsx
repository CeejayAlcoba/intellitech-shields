import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";

const PieChart = () => {
  const data = [
    {
      type: "John Doe",
      value: 27,
    },
    {
      type: "Jane Smith",
      value: 25,
    },
    {
      type: "	Bob Johnson",
      value: 18,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};
export { PieChart };
