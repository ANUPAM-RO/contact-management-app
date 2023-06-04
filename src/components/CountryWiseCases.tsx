import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';

interface CountryData {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
}

const CountryWiseCases: React.FC = () => {
  const [countryData, setCountryData] = useState<CountryData[]>([]);

  console.log(countryData)

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/countries')
      .then((response) => {
        setCountryData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching COVID-19 data:', error);
      });
  }, []);

  if (countryData.length === 0) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: countryData.map((data) => data.country),
    datasets: [
      {
        label: 'Active Cases',
        data: countryData.map((data) => data.active),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderWidth: 1,
      },
      {
        label: 'Recovered',
        data: countryData.map((data) => data.recovered),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1,
      },
      {
        label: 'Deaths',
        data: countryData.map((data) => data.deaths),
        backgroundColor: 'rgba(255, 205, 86, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
          <h1>COVID-19 Dashboard by Country</h1>
          <div>
                  <Line data={chartData} />
          </div>
  
    </div>
  );
};

export default CountryWiseCases;
