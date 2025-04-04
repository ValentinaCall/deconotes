import { Bar } from 'react-chartjs-2';
import { satisfactionData } from '@/lib/data';

const SatisfactionChart = () => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 5
      }
    }
  };

  return <Bar data={satisfactionData} options={options} />;
};

export default SatisfactionChart;
