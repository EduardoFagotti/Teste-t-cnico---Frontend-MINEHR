import React from 'react'
import Chart from 'react-apexcharts';
import {ScatterChartConfig} from './ScatterChartConfig';

export const ScatterChart = () => {
 return (
  <Chart
   options={ScatterChartConfig.options}
   series={ScatterChartConfig.series}
   type="scatter"
  height="290px"
   width="500px"
  />
 )
}
