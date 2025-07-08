import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Skills() {
  const data = {
    labels: ['JavaScript', 'HTML', 'CSS', 'React', 'C#', 'C', 'C++', 'Python'],
    datasets: [
      {
        label: 'Skill Level (%)',
        data: [70, 80, 70, 60, 55, 60, 80, 65],
        backgroundColor: [
          '#facc15', '#e879f9', '#38bdf8', '#22d3ee', '#4ade80', '#a78bfa',
        ],
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // agar bisa atur tinggi
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { color: '#fff' },
        grid: { color: '#334155' },
      },
      x: {
        ticks: { color: '#fff' },
        grid: { color: '#334155' },
      },
    },
    plugins: {
      legend: { labels: { color: '#fff' } },
    },
  };

  return (
    <section
      id="skills"
      style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '100px 20px',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2 data-aos="fade-up" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
          Skills
        </h2>

        <div
          data-aos="zoom-in"
          style={{
            position: 'relative',
            width: '100%',
            height: '400px',
            margin: '0 auto',
          }}
        >
          <Bar data={data} options={options} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
