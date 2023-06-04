import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
interface CovidData {
    cases: number;
    active: number;
  recovered: number;
  deaths: number;
  todayCases: number;
  todayRecovered: number;
  todayDeaths: number;
}

const WorldWideCases: React.FC = () => {
  const [covidData, setCovidData] = useState<CovidData | null>(null);

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/all')
        .then((response) => {
          console.log(response.data)
        setCovidData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching COVID-19 data:', error);
      });
  }, []);

  if (!covidData) {
    return <div>Loading...</div>;
  }

  const chartData = {
      labels: ['All Cases', 'All Active', 'All Recovered', 'All Deaths' ,'Today Cases','Today Recorved', 'Today Deaths' ],
    datasets: [
      {
        label: 'COVID-19 Cases',
        data: [covidData.cases, covidData.active, covidData.recovered, covidData.deaths , covidData.todayCases , covidData.todayRecovered, covidData.todayDeaths],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(100, 182, 162, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 205, 86, 0.6)','rgba(255, 99, 132, 0.6)', 'rgba(100, 182, 162, 0.6)', 'rgba(75, 192, 192, 0.6)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='w-full items-center justify-center flex flex-col gap-2'>
          <h1>COVID-19 Dashboard World Wide</h1>
          <div className='w-2/3 '>
           <Pie data={chartData} />
              
          </div>
    </div>
  );
};

export default WorldWideCases;
