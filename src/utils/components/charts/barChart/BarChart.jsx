import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Bar } from "@ant-design/plots";

const BarChart = () => {
  const data = [
    {
      year: "John Doe",
      value: 38,
    },
    {
      year: "Jane Smith",
      value: 52,
    },
    {
      year: "Bob Johnson",
      value: 61,
    },
  ];
  const config = {
    data,
    xField: "value",
    yField: "year",
    seriesField: "year",
    legend: {
      position: "top-left",
    },
  };
  return <Bar {...config} />;
};
export { BarChart };
