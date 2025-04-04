import { Line } from 'react-chartjs-2';
import { revenueData } from '@/lib/data';

const RevenueChart = () => {
  return <Line data={revenueData} />;
};

export default RevenueChart;
