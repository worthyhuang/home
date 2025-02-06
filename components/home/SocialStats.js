import styles from '../../styles/home/SocialStats.module.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function SocialStats({ translations }) {
  const data = {
    labels: ['抖音', '小红书', 'Etsy'],
    datasets: [
      {
        label: translations.social.followers,
        data: [100000, 50000, 20000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: translations.social.views,
        data: [1000000, 500000, 200000],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: translations.social.title,
      },
    },
  };

  return (
    <section className={styles.socialStats} id="social">
      <h2>{translations.social.title}</h2>
      <div className={styles.chartContainer}>
        <Bar options={options} data={data} />
      </div>
    </section>
  );
} 