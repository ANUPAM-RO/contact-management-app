import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

interface DayWiseData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}

const DayWiseCases: React.FC = () => {
  const [dayWiseData, setDayWiseData] = useState<DayWiseData | null>(null);

  console.log(dayWiseData)

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => {
        setDayWiseData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching COVID-19 data:", error);
      });
  }, []);

  if (!dayWiseData) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: Object.keys(dayWiseData.cases),
    datasets: [
      {
        label: "Total Cases",
        data: Object.values(dayWiseData.cases),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderWidth: 1,
      },
      {
        label: "Recovered",
        data: Object.values(dayWiseData.recovered),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderWidth: 1,
      },
      {
        label: "Deaths",
        data: Object.values(dayWiseData.deaths),
        backgroundColor: "rgba(255, 205, 86, 0.6)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>COVID-19 Dashboard Day Wise</h1>
      <Line data={chartData} />
    </div>
  );
};

export default DayWiseCases;
