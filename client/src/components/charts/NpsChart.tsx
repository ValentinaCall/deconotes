import { Line } from 'react-chartjs-2';
import { npsData } from '@/lib/data';

const NpsChart = () => {
  return <Line data={npsData} />;
};

export default NpsChart;
