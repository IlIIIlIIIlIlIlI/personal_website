import React from 'react';
import scssObj from './_ExperinceChart.scss';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

function ExperinceChart() {
  const data: ApexOptions = {
    series: [
      {
        data: [
          {
            x: 'Analysis',
            y: [
              new Date('2019-02-27').getTime(),
              new Date('2019-03-04').getTime(),
            ],
            fillColor: '#008FFB',
          },
          {
            x: 'Design',
            y: [
              new Date('2019-03-04').getTime(),
              new Date('2019-03-08').getTime(),
            ],
            fillColor: '#00E396',
          },
          {
            x: 'Coding',
            y: [
              new Date('2019-03-07').getTime(),
              new Date('2019-03-10').getTime(),
            ],
            fillColor: '#775DD0',
          },
          {
            x: 'Testing',
            y: [
              new Date('2019-03-08').getTime(),
              new Date('2019-03-12').getTime(),
            ],
            fillColor: '#FEB019',
          },
          {
            x: 'Deployment',
            y: [
              new Date('2019-03-12').getTime(),
              new Date('2019-03-17').getTime(),
            ],
            fillColor: '#FF4560',
          },
        ],
      },
    ],
    chart: {
      height: 350,
      type: 'rangeBar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false,
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#f3f4f5', '#fff'],
      },
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      show: false,
    },
    grid: {
      row: {
        colors: ['#f3f4f5', '#fff'],
        opacity: 1,
      },
    },
  };

  return (
    <div className={`${scssObj.baseClass}__container`}>
      <ReactApexChart
        options={data}
        series={data.series}
        type='rangeBar'
        height={450}
      />
    </div>
  );
}

export default ExperinceChart;
