import React from 'react'
import Chart from 'react-apexcharts';
import {BarChartConfig} from './BarChartConfig';

export const BarChart = () => {
  return (
    <Chart 
     options={BarChartConfig.options}
     series={BarChartConfig.series}
     type="bar"
     height="290px"
     width="500px"
    />
   )
}
