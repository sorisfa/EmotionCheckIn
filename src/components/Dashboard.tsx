import React from 'react';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Happiness',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
            },
            {
                label: 'Sadness',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
            },
        ],
    };

    return (
        <div>
            <h2>Emotion Analysis Dashboard</h2>
            <Line data={data} />
        </div>
    );
};

export default Dashboard;