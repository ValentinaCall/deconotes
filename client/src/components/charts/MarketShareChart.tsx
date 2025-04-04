import { Doughnut } from 'react-chartjs-2';
import { marketShareData } from '@/lib/data';

const MarketShareChart = () => {
  return <Doughnut data={marketShareData} />;
};

export default MarketShareChart;
