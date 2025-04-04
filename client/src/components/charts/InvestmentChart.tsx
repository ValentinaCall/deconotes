import { Bar } from 'react-chartjs-2';
import { investmentData } from '@/lib/data';

const InvestmentChart = () => {
  return <Bar data={investmentData} />;
};

export default InvestmentChart;
