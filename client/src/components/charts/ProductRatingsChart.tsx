import { Radar } from 'react-chartjs-2';
import { productRatingsData } from '@/lib/data';

const ProductRatingsChart = () => {
  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 5
      }
    }
  };

  return <Radar data={productRatingsData} options={options} />;
};

export default ProductRatingsChart;
