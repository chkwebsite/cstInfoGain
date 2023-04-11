const URL_DATA =
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/stock-chart-with-volume_data.json";
const URL_SCHEMA =
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/stock-chart-with-volume_schema.json";

const jsonify = (res) => res.json();
const dataFetch = fetch(URL_DATA).then(jsonify);
const schemaFetch = fetch(URL_SCHEMA).then(jsonify);
Promise.all([dataFetch, schemaFetch]).then(([data, schema]) => {
  const dataStore = new FusionCharts.DataStore();
  const dataSource = {
    chart: {
      theme: "fusion"
    },
    tooltip: {
      enabled: "true",
      toolText:
        "<div style='color: #393939;'><img src = 'https://logodownload.org/wp-content/uploads/2019/07/nasdaq-logo.png' width ='125' height ='30' /><hr>Open: <b>$series.0.openValue</b><br>High: <b>$series.0.highValue</b><br> Low:<b>$series.0.lowValue</b><br>Close: <b>$series.0.closeValue</b></div>"
    },
    // caption: {
    //   text: "NASDAQ Composite Index"
    // },
    // subcaption: {
    //   text: "From February 1971 - November 2018"
    // },
    yaxis: [
      {
        plot: [
          {
            value: {
              open: "Open",
              high: "High",
              low: "Low",
              close: "Close"
            },
            type: "ohlc"
          }
        ],
        title: "Index Value"
      }
    ]
  };
  dataSource.data = dataStore.createDataTable(data, schema);

  new FusionCharts({
    type: "timeseries",
    renderAt: "chart-container",
    width: "100%",
    height: "300",
    dataSource: dataSource
  }).render();
});
//=================================================
new FusionCharts({
    type: "radialbar",
    width: "100%",
    height: "205",
    renderAt: "chart-container1",
    dataSource: {
      chart: {
        theme: "fusion",
        // caption: "Top 5 Android OS Market Share",
        // subCaption: "January 2021",
        // showLegend: 1,
        innerRadius: 30,
        outerRadius: 155,
        showLabels: 1,
        labelText: "<b>$label</b>"
      },
      data: [
        {
          label: "Nougat 7.0",
          value: 4.09
        },
        {
          label: "Oreo 8.0",
          value: 5.19
        },
        {
          label: "Marshmallow 6.0",
          value: 5.77
        },
        {
          label: "Oreo 8.1",
          value: 9.89
        },
        {
          label: "Pie 9.0",
          value: 21.53
        }
      ]
    }
  }).render();
  //===========================================
  new FusionCharts({
    type: "radialbar",
    width: "100%",
    height: "205",
    renderAt: "chart-container2",
    dataSource: {
      chart: {
        theme: "fusion",
        // caption: "Top 5 Android OS Market Share",
        // subCaption: "January 2021",
        // showLegend: 1,
        innerRadius: 30,
        outerRadius: 155,
        showLabels: 1,
        labelText: "<b>$label</b>"
      },
      data: [
        {
          label: "Nougat 7.0",
          value: 5.09
        },
        {
          label: "Oreo 8.0",
          value: 6.19
        },
        {
          label: "Marshmallow 6.0",
          value: 7.77
        },
        {
          label: "Oreo 8.1",
          value: 8.89
        },
        {
          label: "Pie 9.0",
          value: 33.53
        }
      ]
    }
  }).render();
  //===========================================
  new FusionCharts({
    type: "radialbar",
    width: "100%",
    height: "205",
    renderAt: "chart-container3",
    dataSource: {
      chart: {
        theme: "fusion",
        // caption: "Top 5 Android OS Market Share",
        // subCaption: "January 2021",
        // showLegend: 1,
        innerRadius: 30,
        outerRadius: 155,
        showLabels: 1,
        labelText: "<b>$label</b>"
      },
      data: [
        {
          label: "Nougat 7.0",
          value: 50.09
        },
        {
          label: "Oreo 8.0",
          value: 56.19
        },
        {
          label: "Marshmallow 6.0",
          value: 65.77
        },
        {
          label: "Oreo 8.1",
          value: 90.89
        },
        {
          label: "Pie 9.0",
          value: 66.53
        }
      ]
    }
  }).render();
  //===========================================
  new FusionCharts({
    type: "radialbar",
    width: "100%",
    height: "205",
    renderAt: "chart-container4",
    dataSource: {
      chart: {
        theme: "fusion",
        // caption: "Top 5 Android OS Market Share",
        // subCaption: "January 2021",
        // showLegend: 1,
        innerRadius: 30,
        outerRadius: 155,
        showLabels: 1,
        labelText: "<b>$label</b>"
      },
      data: [
        {
          label: "Nougat 7.0",
          value: 40.09
        },
        {
          label: "Oreo 8.0",
          value: 50.19
        },
        {
          label: "Marshmallow 6.0",
          value: 59.77
        },
        {
          label: "Oreo 8.1",
          value: 70.89
        },
        {
          label: "Pie 9.0",
          value: 88.53
        }
      ]
    }
  }).render();
  //=============================================
  const dataSource = {
    chart: {
    //   caption: "Recommended Portfolio Split",
    //   subcaption: "For a net-worth of $1M",
      showvalues: "1",
      showpercentintooltip: "0",
      numberprefix: "$",
      enablemultislicing: "1",
      theme: "fusion"
    },
    data: [
      {
        label: "Equity",
        value: "300000"
      },
      {
        label: "Debt",
        value: "230000"
      },
      {
        label: "Bullion",
        value: "180000"
      },
      {
        label: "Real-estate",
        value: "270000"
      },
      {
        label: "Insurance",
        value: "20000"
      }
    ]
  };
  
  FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "pie3d",
      renderAt: "chart-container5",
      width: "100%",
      height: "200",
      dataFormat: "json",
      dataSource
    }).render();
  });
  //=================================
  FusionCharts.ready(function() {
    var cSatScoreChart = new FusionCharts({
      type: 'angulargauge',
      renderAt: 'chart-container6',
      width: '100%',
      height: '200',
      dataFormat: 'json',
      dataSource: {
        "chart": {
        //   "caption": "Customer Satisfaction Score",
        //   "subcaption": "Los Angeles Topanga",
          "plotToolText": "Current Score: $value",
          "theme": "fint",
          "chartBottomMargin": "50",
          "showValue": "1",
          "showBorder": "0",
          "bgColor": "#ffffff",
        },
        "colorRange": {
          "color": [{
            "minValue": "0",
            "maxValue": "45",
            "code": "#e44a00"
          }, {
            "minValue": "45",
            "maxValue": "75",
            "code": "#f8bd19"
          }, {
            "minValue": "75",
            "maxValue": "100",
            "code": "#6baa01"
          }]
        },
        "dials": {
          "dial": [{
            "value": "70",
            "id": "dial1"
          }]
        }
      },
      "events": {
        rendercomplete: function(e, d) {
          //set value
          document.getElementById("set").addEventListener('click', function() {
            e.sender.setDataForId('dial1', 20);
          });
          
          //get value
          document.getElementById("dial1").addEventListener('click', function() {
            document.getElementById("value1").innerHTML = e.sender.getDataForId('dial1');
          });
        }
      }
    }).render();
  });
  //=============================================
  FusionCharts.ready(function() {
    var cSatScoreChart = new FusionCharts({
      type: 'angulargauge',
      renderAt: 'chart-container7',
      width: '100%',
      height: '200',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          
          "lowerLimit": "0",
          "upperLimit": "100",
          "valueFontSize": "16",
          "valueFontBold": "1",
          "valueBgColor": "#cccccc",
          "valueBorderColor": "#999999",
          "valueAlpha": "80",
          "valueBorderThickness": "2",
          "valueBorderRadius": "2",
          "valueBorderDashed": "1",
          "valueBorderDashGap": "2",
          "valueBorderDashLen": "5",
          "gaugeFillMix": "{dark-40},{light-40},{dark-20}",
          "theme": "fusion"
        },
        "colorRange": {
          "color": [{
              "minValue": "0",
              "maxValue": "50",
              "code": "#e44a00"
            },
            {
              "minValue": "50",
              "maxValue": "75",
              "code": "#f8bd19"
            },
            {
              "minValue": "75",
              "maxValue": "100",
              "code": "#6baa01"
            }
          ]
        },
        "dials": {
          "dial": [{
              "value": "67",
              "showValue": "1",
              "valueX": "190",
              "valueY": "180",
              "tooltext": "Last year's average : $value",
              "rearExtension": "15"
            },
            {
              "value": "78",
              "showValue": "1",
              "valueX": "260",
              "valueY": "220",
              "tooltext": "Current year's average : $value",
              "rearExtension": "15"
            }
          ]
        }
      }
    }).render();
  });
  //=================================
  FusionCharts.ready(function() {
    var cSatScoreChart = new FusionCharts({
      type: 'angulargauge',
      renderAt: 'chart-container8',
      width: '100%',
      height: '200',
      dataFormat: 'json',
      dataSource: {
        "chart": {
        //   "caption": "Customer Satisfaction Score",
        //   "subcaption": "Los Angeles Topanga",
          "plotToolText": "Current Score: $value",
          "theme": "fint",
          "chartBottomMargin": "50",
          "showValue": "1",
          "showBorder": "0",
          "bgColor": "#ffffff",
        },
        "colorRange": {
          "color": [{
            "minValue": "0",
            "maxValue": "45",
            "code": "#e44a00"
          }, {
            "minValue": "45",
            "maxValue": "75",
            "code": "#f8bd19"
          }, {
            "minValue": "75",
            "maxValue": "100",
            "code": "#6baa01"
          }]
        },
        "dials": {
          "dial": [{
            "value": "50",
            "id": "dial1"
          }]
        }
      },
      "events": {
        rendercomplete: function(e, d) {
          //set value
          document.getElementById("set").addEventListener('click', function() {
            e.sender.setDataForId('dial1', 20);
          });
          
          //get value
          document.getElementById("dial1").addEventListener('click', function() {
            document.getElementById("value1").innerHTML = e.sender.getDataForId('dial1');
          });
        }
      }
    }).render();
  });
  //========================================
  FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
      type: 'column2d',
      renderAt: 'chart-containertab',
      width: '100%',
      height: '200',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          
          "xAxisName": "Month",
        //   "yAxisName": "Revenues (In USD)",
          "numberPrefix": "$",
          "theme": "fusion"
        },
  
        "data": [{
            "label": "Jan",
            "value": "420000"
          },
          {
            "label": "Feb",
            "value": "810000"
          },
          {
            "label": "Mar",
            "value": "720000"
          },
          {
            "label": "Apr",
            "value": "550000"
          },
          {
            "label": "May",
            "value": "910000"
          },
          {
            "label": "Jun",
            "value": "510000"
          },
          {
            "label": "Jul",
            "value": "680000"
          },
          {
            "label": "Aug",
            "value": "620000"
          },
          {
            "label": "Sep",
            "value": "610000"
          },
          {
            "label": "Oct",
            "value": "490000"
          },
          {
            "label": "Nov",
            "value": "900000"
          },
          {
            "label": "Dec",
            "value": "730000"
          }
        ]
      }
    });
    revenueChart.render();
  });
  //==========================================
  FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
      type: 'mscolumn2d',
      renderAt: 'chart-container9',
      width: '100%',
      height: '200',
      dataFormat: 'json',
      dataSource: {
        "chart": {
        //   "caption": "Comparison of Quarterly Revenue",
        //   "subCaption": "Harry's SuperMart",
          "xAxisname": "Quarter",
        //   "yAxisName": "Revenues (In USD)",
          "numberPrefix": "$",
          "theme": "fusion"
        },
        "categories": [{
          "category": [{
            "label": "Q1"
          }, {
            "label": "Q2"
          }, {
            "label": "Q3"
          }, {
            "label": "Q4"
          }]
        }],
        "dataset": [{
          "seriesname": "Previous Year",
          "data": [{
            "value": "10000"
          }, {
            "value": "11500"
          }, {
            "value": "12500"
          }, {
            "value": "15000"
          }]
        }, {
          "seriesname": "Current Year",
          "data": [{
            "value": "25400"
          }, {
            "value": "29800"
          }, {
            "value": "21800"
          }, {
            "value": "26800"
          }]
        }]
      }
    });
  
    revenueChart.render();
  });
  //==========================================
  FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
      type: 'mscolumn3d',
      renderAt: 'chart-container10',
      width: '100%',
      height: '200',
      dataFormat: 'json',
      dataSource: {
        "chart": {
        //   "caption": "Comparison of Quarterly Revenue",
        //   "subCaption": "Harry's SuperMart",
          "xAxisname": "Quarter",
        //   "yAxisName": "Revenues (In USD)",
          "numberPrefix": "$",
          "theme": "fusion"
        },
        "categories": [{
          "category": [{
            "label": "Q1"
          }, {
            "label": "Q2"
          }, {
            "label": "Q3"
          }, {
            "label": "Q4"
          }]
        }],
        "dataset": [{
          "seriesname": "Previous Year",
          "data": [{
            "value": "10000"
          }, {
            "value": "11500"
          }, {
            "value": "12500"
          }, {
            "value": "15000"
          }]
        }, {
          "seriesname": "Current Year",
          "data": [{
            "value": "25400"
          }, {
            "value": "29800"
          }, {
            "value": "21800"
          }, {
            "value": "26800"
          }]
        }]
      }
    });
  
    revenueChart.render();
  });
  //===================================
  FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
      type: 'msbar2d',
      renderAt: 'chart-containerbig',
      width: '100%',
      height: '444',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "theme": "fusion",
          
          "yAxisname": "Sales (In USD)",
          "numberPrefix": "$"
        },
        "categories": [{
          "category": [{
              "label": "Bakersfield Central"
            },
            {
              "label": "Garden Groove harbour"
            },
            {
              "label": "Los Angeles Topanga"
            },
            {
              "label": "Compton-Rancho Dom"
            },
            {
              "label": "Daly City Serramonte"
            }
          ]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "17000"
              },
              {
                "value": "19500"
              },
              {
                "value": "12500"
              },
              {
                "value": "14500"
              },
              {
                "value": "17500"
              }
            ]
          },
          {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "25400"
              },
              {
                "value": "29800"
              },
              {
                "value": "21800"
              },
              {
                "value": "19500"
              },
              {
                "value": "11500"
              }
            ]
          }
        ],
        "trendlines": [{
          "line": [{
              "startvalue": "15000",
              "color": "#5D62B5",
              "valueOnRight": "1",
              "displayvalue": "Avg. for{br}Food"
            },
            {
              "startvalue": "22000",
              "color": "#29C3BE",
              "valueOnRight": "1",
              "displayvalue": "Avg. for{br}Non-food"
            }
          ]
        }]
      }
    }).render();
  });
  