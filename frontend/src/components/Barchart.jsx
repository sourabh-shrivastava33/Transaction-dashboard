import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
} from "chart.js";
import { useSelector } from "react-redux";
Chartjs.register(
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
  BarElement
);
const Barchart = () => {
  const { barChartData } = useSelector((state) => state.transaction);
  const labels = barChartData.map((data) => data.priceRange);
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Items count within price range",
      },
      tooltip: {
        enabled: true, // Enable tooltips
        mode: "index", // Display tooltips for all data points at the same index
        intersect: false, // Allow tooltips to intersect with other elements
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Items",
        data: barChartData.map((data) => data.items),

        borderWidth: 1,
        backgroundColor: [
          "#001524",
          "#15616d",
          "#ffecd1",
          "#ff7d00",
          "#78290f",
          "#bb9457",
          "#ca6702",
        ],
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default Barchart;
