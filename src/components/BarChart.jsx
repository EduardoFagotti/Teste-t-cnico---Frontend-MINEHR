import React from 'react'
import Chart from 'react-apexcharts';

export const BarChart = () => {
  const barConfig = {
    options: {
      Chart: {
       type: 'bar',
       height: '350'
      },
      xaxis: {
       categories: [
         'South Korea',
         'Canada',
         'United Kingdom',
         'Netherlands',
         'Italy',
         'France',
         'Japan',
         'United States',
         'China',
         'Germany',
       ]
      },
      plotOptions: {
         bar: {
           borderRadius: 4,
           horizontal: true,
        }
      },
      fill: {
       colors: ['#f44336']
      },
      dataLabels:{
       enabled: false
      },
      title: {
        text: 'Barras',
       //  align: 'start',
        margin: 20,
        offsetY: 20,
        style: {
         fontSize: '25px'
        }
      }
   },
   series: [{
     data: [
      400,
      430,
      448,
      470,
      540,
      580,
      690,
      1100,
      1200,
      1380,
     ]
   }]
  }
  return (
    <Chart
     options={barConfig.options}
     series={barConfig.series}
     type="bar"
     height="359px"
     width="680px"
    />
   )
}
