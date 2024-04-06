import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { useSelector } from "react-redux";
ChartJS.register(
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
  ArcElement,
  LineElement
);
import { Pie } from "react-chartjs-2";
const PieChart = () => {
  const { categoryWiseItemCount } = useSelector((state) => state.transaction);
  let labels = categoryWiseItemCount.map((data) => data._id);
  let counts = categoryWiseItemCount.map((data) => data.items);
  const options = {
    responsive: true,
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Category Wise Item Count",
        data: counts,
        backgroundColor: [
          "#001524", // Red
          "#15616d", // Blue
          "#ffecd1", // Yellow
          "#ff7d00", // Green
          // Add more colors if you have more categories
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie options={options} data={data} />;
};

export default PieChart;
