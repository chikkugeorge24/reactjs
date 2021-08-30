import React from "react";
import { Bar } from "react-chartjs-2";

const BarChartDemo = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,0.2)",
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        borderColor: "#742774",
        backgroundColor: "#742774",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Y text",
          },
          ticks: {
            min: 0,
            max: 100,
            stepSize: 20,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "X text",
          },
        },
      ],
    },
  };
  return <Bar data={data} options={options} />;
};

export default BarChartDemo;
