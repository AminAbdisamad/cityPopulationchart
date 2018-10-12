const charDiv = document.querySelector('#chart');
const colors = [
  '#008FFB',
  '#00E396',
  '#FEB019',
  '#FF4560',
  '#775DD0',
  '#546E7A',
  '#26a69a',
  '#D10CE8',
  '#FF4560',
  '#775DD0',
  '#546E7A',
  '#26a69a',
  '#D10CE8'
];
const options = {
  chart: {
    height: 450,
    width: '100%',
    type: 'bar',
    // type: 'pie',
    background: '#f4f4f0',
    foreground: '#eee'
  },
  series: [
    {
      name: 'Current Population',
      data: [
        2587183,
        477876,
        288211,
        242344,
        234852,
        230100,
        185270,
        129839,
        74287,
        65461,
        61200,
        60100,
        57300
      ]
    }
  ],
  xaxis: {
    categories: [
      'Mogadishu',
      'Hargeysa',
      'Burao',
      'Berbera',
      'Kismayo',
      'Marka',
      'Jamaame',
      'Baidoa',
      'Bosaso',
      'Afgooye',
      'Gaalkacyo',
      'Laascaanood',
      'Garoowe'
    ],
    labels: {
      style: {
        colors: colors,
        fontSize: '14px'
      }
    }
  },
  colors: colors,
  plotOptions: {
    bar: {
      horizontal: false,
      distributed: true,
      columnWidth: '65%'
    }
  },
  fill: {
    // colors: ['#045450']
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'Most Populated Cities in Somalia',
    align: 'center',
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: '25px'
    }
  }
};

var chart = new ApexCharts(charDiv, options);

chart.render();
