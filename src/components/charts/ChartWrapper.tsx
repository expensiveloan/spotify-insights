import React from 'react';
import { Bar } from 'react-chartjs-2';

interface ChartWrapperProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
  title: string;
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ data, title }) => {
  return (
    <div className="chart-wrapper">
      <h2 className="chart-title">{title}</h2>
      <Bar data={data} options={{ responsive: true }} />
    </div>
  );
};

export default ChartWrapper;