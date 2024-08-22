import React from 'react';
import { Bar } from 'react-chartjs-2';

function Chart({ data }) {
  const chartData = {
    labels: data.map(user => user.name),
    datasets: [
      {
        label: 'Login Count',
        data: data.map(user => user.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
}

export default Chart;
