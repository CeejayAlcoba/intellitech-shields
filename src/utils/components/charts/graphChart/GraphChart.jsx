import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const GraphChart = () => {
  const [data, setData] = useState([]);
//   const data=[
//     {
//         "year": "1850",
//         "value": 0,
//         "category": "Liquid fuel"
//       },
//       {
//         "year": "1850",
//         "value": 54,
//         "category": "Solid fuel"
//       },
//       {
//         "year": "1850",
//         "value": 0,
//         "category": "Gas fuel"
//       },
//       {
//         "year": "1850",
//         "value": 0,
//         "category": "Cement production"
//       },
//   ]
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };

  return <Line {...config} />;
};

export {GraphChart}
