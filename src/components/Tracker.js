import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './Tracker_module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ...registerables
);
const Tracker = () => {
  const data = {
    labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`), // Placeholder for the x-axis labels
    datasets: [
      {
        label: 'Value',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 75, 90], // Placeholder data
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    // Additional options can be added here to customize the chart
  };

  return (
    <div className="chartContainer">
    <div className="chartBox">
        <Line data={data} options={options} />
      </div>
    </div>
  );

};

export default Tracker;
