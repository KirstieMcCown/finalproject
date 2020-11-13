// Themes begin
am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
  {
    category: "2010",
    value1: 290773,
    value2: 9220,
    value3: 222
  },
  {
    category: "2011",
    value1: 292736,
    value2: 9060,
    value3: 228
  },
  {
    category: "2012",
    value1: 301025,
    value2: 9062,
    value3: 191
  },
  {
    category: "2013",
    value1: 300148,
    value2: 9092,
    value3: 249
  },
  {
    category: "2014",
    value1: 303207,
    value2: 9116,
    value3: 219
  },
  {
    category: "2015",
    value1: 299728,
    value2: 8922,
    value3: 237
    },
  {
    category: "2016",
    value1: 305734,
    value2: 8818,
    value3: 0
    },
  {
    category: "2017",
    value1: 296579,
    value2: 32,
    value3: 0
    },
  {
    category: "2018",
    value1: 585868,
    value2: 11402,
    value3: 378
  }
];

chart.colors.step = 2;
chart.padding(30, 30, 10, 30);
chart.legend = new am4charts.Legend();

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;
valueAxis.calculateTotals = true;
valueAxis.renderer.minWidth = 50;


var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.columns.template.width = am4core.percent(80);
series1.columns.template.tooltipText =
  "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
series1.name = "Singleton";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value1";
series1.dataFields.valueYShow = "totalPercent";
series1.dataItems.template.locations.categoryX = 0.5;
series1.stacked = true;
series1.tooltip.pointerOrientation = "vertical";

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
bullet1.label.fill = am4core.color("#ffffff");
bullet1.locationY = 0.5;

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.columns.template.width = am4core.percent(80);
series2.columns.template.tooltipText =
  "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
series2.name = "Twins";
series2.dataFields.categoryX = "category";
series2.dataFields.valueY = "value2";
series2.dataFields.valueYShow = "totalPercent";
series2.dataItems.template.locations.categoryX = 0.5;
series2.stacked = true;
series2.tooltip.pointerOrientation = "vertical";

var bullet2 = series2.bullets.push(new am4charts.LabelBullet());
bullet2.interactionsEnabled = false;
bullet2.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
bullet2.locationY = 0.5;
bullet2.label.fill = am4core.color("#ffffff");

// var series3 = chart.series.push(new am4charts.ColumnSeries());
// series3.columns.template.width = am4core.percent(80);
// series3.columns.template.tooltipText =
//   "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
// series3.name = "Other Multiples";
// series3.dataFields.categoryX = "category";
// series3.dataFields.valueY = "value3";
// series3.dataFields.valueYShow = "totalPercent";
// series3.dataItems.template.locations.categoryX = 0.5;
// series3.stacked = true;
// series3.tooltip.pointerOrientation = "vertical";

// var bullet3 = series3.bullets.push(new am4charts.LabelBullet());
// bullet3.interactionsEnabled = false;
// bullet3.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
// bullet3.locationY = 0.5;
// bullet3.label.fill = am4core.color("#ffffff");

chart.scrollbarX = new am4core.Scrollbar();