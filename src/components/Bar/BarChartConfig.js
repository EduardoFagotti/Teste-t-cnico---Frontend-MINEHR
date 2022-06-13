export const BarChartConfig = {
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
     colors: ['#0073ff']
    },
    dataLabels:{
     enabled: true
    },
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