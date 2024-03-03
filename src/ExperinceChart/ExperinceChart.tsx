import React from 'react';
import scssObj from './_ExperinceChart.scss';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

function ExperinceChart() {
  const data: ApexOptions = {
    series: [
      {
        name: 'Aether Enterprise Applications LLP',
        data: [
          {
            x: 'Full Stack Software Developer',
            y: [new Date('2021-11-15').getTime(), new Date().getTime()],
            fillColor: '#5F44FF',
            meta: { suraj: 'sdsd' },
          },
        ],
      },
      {
        name: 'Senior Analyst',
        data: [
          {
            x: 'eClerx Services Limited',
            y: [
              new Date('2020-11-10').getTime(),
              new Date('2021-11-11').getTime(),
            ],
            fillColor: '#4133FF',
          },
        ],
      },
      {
        name: 'B.Tech from VJTI, Mumbai',
        data: [
          {
            x: 'Electronics and Telecommunications Engineering',
            y: [
              new Date('2016-08-10').getTime(),
              new Date('2020-09-29').getTime(),
            ],
            fillColor: '#665AFF',
          },
        ],
      },
      {
        name: 'HSC (12th) Science',
        data: [
          {
            x: '92.46%',
            y: [
              new Date('2015-06-15').getTime(),
              new Date('2016-06-15').getTime(),
            ],
            fillColor: '#8B81FF',
          },
        ],
      },
      {
        name: 'SCC (10th)',
        data: [
          {
            x: '94.80%',
            y: [
              new Date('2013-06-15').getTime(),
              new Date('2014-06-15').getTime(),
            ],
            fillColor: '#9C94FF',
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
        rangeBarGroupRows: true,
        dataLabels: {
          hideOverflowingLabels: false,
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => {
        const dataIndex = opts.seriesIndex;
        const label = opts.w.config.series[dataIndex].data[0].meta;

        return 'suraj';
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
        colors: ['#F5F5F5', '#F5FFF5'],
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
