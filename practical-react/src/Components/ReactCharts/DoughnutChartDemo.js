import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChartDemo = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        backgroundColor: [
          "rgba(255,99,132,1)",
          "rgba(255,205,86,1)",
          "rgba(54,162,235,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
          "rgba(20,100,10,1)",
        ],
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    },
  };
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChartDemo;
