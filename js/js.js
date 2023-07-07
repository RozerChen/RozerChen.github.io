
$(function () {
  var data111 = [0,0,0,0,0,0,0];
  var xdata111 = [getNewTime(),getNewTime(),getNewTime(),getNewTime(),getNewTime(),getNewTime(),getNewTime()];
  var tempAll = 1;
  var times = 0;
 myecharts_1();
 setInterval(getData,2000);
 setInterval(myecharts_1,2000);
myecharts_2();
myecharts_3();
myecharts_4();
myecharts_5();
myecharts_6();
map();
myecharts_7();
echarts_1();

function myecharts_1(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('myechart1'));
      var temperature = document.getElementById("temperature");
      tempAll+=data111[6]
      times++
      temperature.innerHTML = (tempAll/times).toFixed(2)+'°C';
    //单线段（polyline=false），如图右侧各段展示：
let yData = [0, 0, 0, 0, 0, 0,0],
xData = xdata111
    datacoords = [];
  for (var i = 0; i < yData.length; i++) {
    datacoords.push([
      {
        coord: [i, yData[i]],
      },
      {
        coord: [i + 1, yData[i + 1]],
      },
    ]);
  }

  option = {
    animation: true,
    animationDuration: 3000,
    animationEasing: "bounceOut",
    animationThreshold: 8,
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,.5)",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "rgba(0,0,0,.5)",
        },
      },
      textStyle: {
        color: "#fff",
        fontSize: 14,
      },
    },
    grid: {
      left: "5%",
      right: "13%",
      top: "15%",
      bottom: "5%",
      containLabel: true,
    },
    xAxis: [
      {
        nameGap: 3,
        nameTextStyle: {
          color: "rgba(255,255,255,.8)",
          fontSize: 12,
        },
        type: "category",
        data: xData,
        boundaryGap: false,
        axisLine: {
          onZero: true,
          rotate: 30,
          interval: 1,
          lineStyle: {
            color: "#636E7C",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)",
          fontSize: 12,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        name: "个",
        min: 0,
        max: function (value) {
          return Math.ceil(value.max / 5) * 5;
        },
        splitNumber: 5,
        type: "value",
        nameTextStyle: {
          color: "rgba(255,255,255,.89)",
          fontSize: 12,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.25)",
            type: "dashed",
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#636E7C",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)",
          fontSize: 12,
        },
      },
    ],
    series: [
      {
        name: "环境温度",
        type: "line",
        smooth: false,
        lineStyle: {
          color: "rgba(22,115,172)",
          width: 1.5,
          type: "dashed",
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          shadowBlur: 4,
          shadowColor: "rgba(255, 255, 255, 0.8)",
        },
        showSymbol: true,
        symbol: "circle",
        symbolSize: 7,
        itemStyle: {
          color: "#021E47",
          borderWidth: 1,
          borderColor: "rgba(184,255,255)",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 1,
              color: "rgba(34,81,133)",
            },
            {
              offset: 0.74,
              color: "rgba(34,81,133,0.8)",
            },
            {
              offset: 0,
              color: "rgba(34,81,133,0.5)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: data111,
      },
      {
        showSymbol: false,
        name: "环境温度",
        type: "lines",
        smooth: false,
        coordinateSystem: "cartesian2d",
        zlevel: 1,
        effect: {
          show: true,
          smooth: true,
          period: 6,
          symbolSize: 4,
        },
        lineStyle: {
          color: "#fff",
          width: 1,
          opacity: 0,
          curveness: 0,
          cap: "round",
        },
        data: datacoords,
      },
    ],
    };
  
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
     
}
function myecharts_2(){
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('myechart2'));
//单线段（polyline=false），如图右侧各段展示：
let yData = [6, 0, 0, 0, 0, 0,0],
xData = xdata111
datacoords = [];
for (var i = 0; i < yData.length; i++) {
datacoords.push([
{
  coord: [i, yData[i]],
},
{
  coord: [i + 1, yData[i + 1]],
},
]);
}

option = {
animation: true,
animationDuration: 3000,
animationEasing: "bounceOut",
animationThreshold: 8,
backgroundColor: "transparent",
tooltip: {
trigger: "axis",
backgroundColor: "rgba(0,0,0,.5)",
axisPointer: {
  type: "cross",
  label: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
},
textStyle: {
  color: "#fff",
  fontSize: 14,
},
},
grid: {
left: "5%",
right: "13%",
top: "15%",
bottom: "5%",
containLabel: true,
},
xAxis: [
{
  nameGap: 3,
  nameTextStyle: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  type: "category",
  data: xData,
  boundaryGap: false,
  axisLine: {
    onZero: true,
    rotate: 30,
    interval: 1,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  axisTick: {
    show: false,
  },
},
],
yAxis: [
{
  name: "个",
  min: 0,
  max: function (value) {
    return Math.ceil(value.max / 5) * 5;
  },
  splitNumber: 5,
  type: "value",
  nameTextStyle: {
    color: "rgba(255,255,255,.89)",
    fontSize: 12,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: "rgba(255,255,255,.25)",
      type: "dashed",
    },
  },
  axisTick: {
    show: false,
  },
  axisLine: {
    show: true,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
},
],
series: [
{
  name: "光照强度",
  type: "line",
  smooth: false,
  lineStyle: {
    color: "rgba(22,115,172)",
    width: 1.5,
    type: "dashed",
    shadowOffsetX: 0,
    shadowOffsetY: 10,
    shadowBlur: 4,
    shadowColor: "rgba(255, 255, 255, 0.8)",
  },
  showSymbol: true,
  symbol: "circle",
  symbolSize: 7,
  itemStyle: {
    color: "#021E47",
    borderWidth: 1,
    borderColor: "rgba(184,255,255)",
  },
  areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
      {
        offset: 1,
        color: "rgba(34,81,133)",
      },
      {
        offset: 0.74,
        color: "rgba(34,81,133,0.8)",
      },
      {
        offset: 0,
        color: "rgba(34,81,133,0.5)",
      },
    ]),
  },
  emphasis: {
    focus: "series",
  },
  data: data111,
},
{
  showSymbol: false,
  name: "光照强度",
  type: "lines",
  smooth: false,
  coordinateSystem: "cartesian2d",
  zlevel: 1,
  effect: {
    show: true,
    smooth: true,
    period: 6,
    symbolSize: 4,
  },
  lineStyle: {
    color: "#fff",
    width: 1,
    opacity: 0,
    curveness: 0,
    cap: "round",
  },
  data: datacoords,
},
],
};


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize",function(){
      myChart.resize();
  });

}
function myecharts_3(){
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('myechart3'));
//单线段（polyline=false），如图右侧各段展示：
let yData = [6, 0, 0, 0, 0, 0,0],
xData = xdata111
datacoords = [];
for (var i = 0; i < yData.length; i++) {
datacoords.push([
{
  coord: [i, yData[i]],
},
{
  coord: [i + 1, yData[i + 1]],
},
]);
}

option = {
animation: true,
animationDuration: 3000,
animationEasing: "bounceOut",
animationThreshold: 8,
backgroundColor: "transparent",
tooltip: {
trigger: "axis",
backgroundColor: "rgba(0,0,0,.5)",
axisPointer: {
  type: "cross",
  label: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
},
textStyle: {
  color: "#fff",
  fontSize: 14,
},
},
grid: {
left: "5%",
right: "13%",
top: "15%",
bottom: "5%",
containLabel: true,
},
xAxis: [
{
  nameGap: 3,
  nameTextStyle: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  type: "category",
  data: xData,
  boundaryGap: false,
  axisLine: {
    onZero: true,
    rotate: 30,
    interval: 1,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  axisTick: {
    show: false,
  },
},
],
yAxis: [
{
  name: "个",
  min: 0,
  max: function (value) {
    return Math.ceil(value.max / 5) * 5;
  },
  splitNumber: 5,
  type: "value",
  nameTextStyle: {
    color: "rgba(255,255,255,.89)",
    fontSize: 12,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: "rgba(255,255,255,.25)",
      type: "dashed",
    },
  },
  axisTick: {
    show: false,
  },
  axisLine: {
    show: true,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
},
],
series: [
{
  name: "环境湿度",
  type: "line",
  smooth: false,
  lineStyle: {
    color: "rgba(22,115,172)",
    width: 1.5,
    type: "dashed",
    shadowOffsetX: 0,
    shadowOffsetY: 10,
    shadowBlur: 4,
    shadowColor: "rgba(255, 255, 255, 0.8)",
  },
  showSymbol: true,
  symbol: "circle",
  symbolSize: 7,
  itemStyle: {
    color: "#021E47",
    borderWidth: 1,
    borderColor: "rgba(184,255,255)",
  },
  areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
      {
        offset: 1,
        color: "rgba(34,81,133)",
      },
      {
        offset: 0.74,
        color: "rgba(34,81,133,0.8)",
      },
      {
        offset: 0,
        color: "rgba(34,81,133,0.5)",
      },
    ]),
  },
  emphasis: {
    focus: "series",
  },
  data: data111,
},
{
  showSymbol: false,
  name: "环境湿度",
  type: "lines",
  smooth: false,
  coordinateSystem: "cartesian2d",
  zlevel: 1,
  effect: {
    show: true,
    smooth: true,
    period: 6,
    symbolSize: 4,
  },
  lineStyle: {
    color: "#fff",
    width: 1,
    opacity: 0,
    curveness: 0,
    cap: "round",
  },
  data: datacoords,
},
],
};


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize",function(){
      myChart.resize();
  });

}
function myecharts_4(){
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('myechart4'));
//单线段（polyline=false），如图右侧各段展示：
let yData = [6, 0, 0, 0, 0, 0,0],
xData = xdata111
datacoords = [];
for (var i = 0; i < yData.length; i++) {
datacoords.push([
{
  coord: [i, yData[i]],
},
{
  coord: [i + 1, yData[i + 1]],
},
]);
}

option = {
animation: true,
animationDuration: 3000,
animationEasing: "bounceOut",
animationThreshold: 8,
backgroundColor: "transparent",
tooltip: {
trigger: "axis",
backgroundColor: "rgba(0,0,0,.5)",
axisPointer: {
  type: "cross",
  label: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
},
textStyle: {
  color: "#fff",
  fontSize: 14,
},
},
grid: {
left: "5%",
right: "13%",
top: "15%",
bottom: "5%",
containLabel: true,
},
xAxis: [
{
  nameGap: 3,
  nameTextStyle: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  type: "category",
  data: xData,
  boundaryGap: false,
  axisLine: {
    onZero: true,
    rotate: 30,
    interval: 1,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  axisTick: {
    show: false,
  },
},
],
yAxis: [
{
  name: "个",
  min: 0,
  max: function (value) {
    return Math.ceil(value.max / 5) * 5;
  },
  splitNumber: 5,
  type: "value",
  nameTextStyle: {
    color: "rgba(255,255,255,.89)",
    fontSize: 12,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: "rgba(255,255,255,.25)",
      type: "dashed",
    },
  },
  axisTick: {
    show: false,
  },
  axisLine: {
    show: true,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
},
],
series: [
{
  name: "土壤湿度",
  type: "line",
  smooth: false,
  lineStyle: {
    color: "rgba(22,115,172)",
    width: 1.5,
    type: "dashed",
    shadowOffsetX: 0,
    shadowOffsetY: 10,
    shadowBlur: 4,
    shadowColor: "rgba(255, 255, 255, 0.8)",
  },
  showSymbol: true,
  symbol: "circle",
  symbolSize: 7,
  itemStyle: {
    color: "#021E47",
    borderWidth: 1,
    borderColor: "rgba(184,255,255)",
  },
  areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
      {
        offset: 1,
        color: "rgba(34,81,133)",
      },
      {
        offset: 0.74,
        color: "rgba(34,81,133,0.8)",
      },
      {
        offset: 0,
        color: "rgba(34,81,133,0.5)",
      },
    ]),
  },
  emphasis: {
    focus: "series",
  },
  data: data111,
},
{
  showSymbol: false,
  name: "土壤湿度",
  type: "lines",
  smooth: false,
  coordinateSystem: "cartesian2d",
  zlevel: 1,
  effect: {
    show: true,
    smooth: true,
    period: 6,
    symbolSize: 4,
  },
  lineStyle: {
    color: "#fff",
    width: 1,
    opacity: 0,
    curveness: 0,
    cap: "round",
  },
  data: datacoords,
},
],
};


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize",function(){
      myChart.resize();
  });

}
function myecharts_5(){
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('myechart5'));
//单线段（polyline=false），如图右侧各段展示：
let yData = [6, 0, 0, 0, 0, 0,0],
xData = xdata111
datacoords = [];
for (var i = 0; i < yData.length; i++) {
datacoords.push([
{
  coord: [i, yData[i]],
},
{
  coord: [i + 1, yData[i + 1]],
},
]);
}

option = {
animation: true,
animationDuration: 3000,
animationEasing: "bounceOut",
animationThreshold: 8,
backgroundColor: "transparent",
tooltip: {
trigger: "axis",
backgroundColor: "rgba(0,0,0,.5)",
axisPointer: {
  type: "cross",
  label: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
},
textStyle: {
  color: "#fff",
  fontSize: 14,
},
},
grid: {
left: "5%",
right: "13%",
top: "15%",
bottom: "5%",
containLabel: true,
},
xAxis: [
{
  nameGap: 3,
  nameTextStyle: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  type: "category",
  data: xData,
  boundaryGap: false,
  axisLine: {
    onZero: true,
    rotate: 30,
    interval: 1,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  axisTick: {
    show: false,
  },
},
],
yAxis: [
{
  name: "个",
  min: 0,
  max: function (value) {
    return Math.ceil(value.max / 5) * 5;
  },
  splitNumber: 5,
  type: "value",
  nameTextStyle: {
    color: "rgba(255,255,255,.89)",
    fontSize: 12,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: "rgba(255,255,255,.25)",
      type: "dashed",
    },
  },
  axisTick: {
    show: false,
  },
  axisLine: {
    show: true,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
},
],
series: [
{
  name: "苏苏小苏苏",
  type: "line",
  smooth: false,
  lineStyle: {
    color: "rgba(22,115,172)",
    width: 1.5,
    type: "dashed",
    shadowOffsetX: 0,
    shadowOffsetY: 10,
    shadowBlur: 4,
    shadowColor: "rgba(255, 255, 255, 0.8)",
  },
  showSymbol: true,
  symbol: "circle",
  symbolSize: 7,
  itemStyle: {
    color: "#021E47",
    borderWidth: 1,
    borderColor: "rgba(184,255,255)",
  },
  areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
      {
        offset: 1,
        color: "rgba(34,81,133)",
      },
      {
        offset: 0.74,
        color: "rgba(34,81,133,0.8)",
      },
      {
        offset: 0,
        color: "rgba(34,81,133,0.5)",
      },
    ]),
  },
  emphasis: {
    focus: "series",
  },
  data: data111,
},
{
  showSymbol: false,
  name: "苏苏小苏苏",
  type: "lines",
  smooth: false,
  coordinateSystem: "cartesian2d",
  zlevel: 1,
  effect: {
    show: true,
    smooth: true,
    period: 6,
    symbolSize: 4,
  },
  lineStyle: {
    color: "#fff",
    width: 1,
    opacity: 0,
    curveness: 0,
    cap: "round",
  },
  data: datacoords,
},
],
};


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize",function(){
      myChart.resize();
  });

}
function myecharts_6(){
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('myechart6'));
//单线段（polyline=false），如图右侧各段展示：
let yData = [6, 0, 0, 0, 0, 0,0],
xData = xdata111
datacoords = [];
for (var i = 0; i < yData.length; i++) {
datacoords.push([
{
  coord: [i, yData[i]],
},
{
  coord: [i + 1, yData[i + 1]],
},
]);
}

option = {
animation: true,
animationDuration: 3000,
animationEasing: "bounceOut",
animationThreshold: 8,
backgroundColor: "transparent",
tooltip: {
trigger: "axis",
backgroundColor: "rgba(0,0,0,.5)",
axisPointer: {
  type: "cross",
  label: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
},
textStyle: {
  color: "#fff",
  fontSize: 14,
},
},
grid: {
left: "5%",
right: "13%",
top: "15%",
bottom: "5%",
containLabel: true,
},
xAxis: [
{
  nameGap: 3,
  nameTextStyle: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  type: "category",
  data: xData,
  boundaryGap: false,
  axisLine: {
    onZero: true,
    rotate: 30,
    interval: 1,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  axisTick: {
    show: false,
  },
},
],
yAxis: [
{
  name: "个",
  min: 0,
  max: function (value) {
    return Math.ceil(value.max / 5) * 5;
  },
  splitNumber: 5,
  type: "value",
  nameTextStyle: {
    color: "rgba(255,255,255,.89)",
    fontSize: 12,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: "rgba(255,255,255,.25)",
      type: "dashed",
    },
  },
  axisTick: {
    show: false,
  },
  axisLine: {
    show: true,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
},
],
series: [
{
  name: "苏苏小苏苏",
  type: "line",
  smooth: false,
  lineStyle: {
    color: "rgba(22,115,172)",
    width: 1.5,
    type: "dashed",
    shadowOffsetX: 0,
    shadowOffsetY: 10,
    shadowBlur: 4,
    shadowColor: "rgba(255, 255, 255, 0.8)",
  },
  showSymbol: true,
  symbol: "circle",
  symbolSize: 7,
  itemStyle: {
    color: "#021E47",
    borderWidth: 1,
    borderColor: "rgba(184,255,255)",
  },
  areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
      {
        offset: 1,
        color: "rgba(34,81,133)",
      },
      {
        offset: 0.74,
        color: "rgba(34,81,133,0.8)",
      },
      {
        offset: 0,
        color: "rgba(34,81,133,0.5)",
      },
    ]),
  },
  emphasis: {
    focus: "series",
  },
  data: data111,
},
{
  showSymbol: false,
  name: "苏苏小苏苏",
  type: "lines",
  smooth: false,
  coordinateSystem: "cartesian2d",
  zlevel: 1,
  effect: {
    show: true,
    smooth: true,
    period: 6,
    symbolSize: 4,
  },
  lineStyle: {
    color: "#fff",
    width: 1,
    opacity: 0,
    curveness: 0,
    cap: "round",
  },
  data: datacoords,
},
],
};


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize",function(){
      myChart.resize();
  });

}
function myecharts_7(){
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('myechart7'));
//单线段（polyline=false），如图右侧各段展示：
let yData = [6, 0, 0, 0, 0, 0,0],
xData = xdata111
datacoords = [];
for (var i = 0; i < yData.length; i++) {
datacoords.push([
{
  coord: [i, yData[i]],
},
{
  coord: [i + 1, yData[i + 1]],
},
]);
}

option = {
animation: true,
animationDuration: 3000,
animationEasing: "bounceOut",
animationThreshold: 8,
backgroundColor: "transparent",
tooltip: {
trigger: "axis",
backgroundColor: "rgba(0,0,0,.5)",
axisPointer: {
  type: "cross",
  label: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
},
textStyle: {
  color: "#fff",
  fontSize: 14,
},
},
grid: {
left: "5%",
right: "13%",
top: "15%",
bottom: "5%",
containLabel: true,
},
xAxis: [
{
  nameGap: 3,
  nameTextStyle: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  type: "category",
  data: xData,
  boundaryGap: false,
  axisLine: {
    onZero: true,
    rotate: 30,
    interval: 1,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
  axisTick: {
    show: false,
  },
},
],
yAxis: [
{
  name: "个",
  min: 0,
  max: function (value) {
    return Math.ceil(value.max / 5) * 5;
  },
  splitNumber: 5,
  type: "value",
  nameTextStyle: {
    color: "rgba(255,255,255,.89)",
    fontSize: 12,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: "rgba(255,255,255,.25)",
      type: "dashed",
    },
  },
  axisTick: {
    show: false,
  },
  axisLine: {
    show: true,
    lineStyle: {
      color: "#636E7C",
    },
  },
  axisLabel: {
    color: "rgba(255,255,255,.8)",
    fontSize: 12,
  },
},
],
series: [
{
  name: "苏苏小苏苏",
  type: "line",
  smooth: false,
  lineStyle: {
    color: "rgba(22,115,172)",
    width: 1.5,
    type: "dashed",
    shadowOffsetX: 0,
    shadowOffsetY: 10,
    shadowBlur: 4,
    shadowColor: "rgba(255, 255, 255, 0.8)",
  },
  showSymbol: true,
  symbol: "circle",
  symbolSize: 7,
  itemStyle: {
    color: "#021E47",
    borderWidth: 1,
    borderColor: "rgba(184,255,255)",
  },
  areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
      {
        offset: 1,
        color: "rgba(34,81,133)",
      },
      {
        offset: 0.74,
        color: "rgba(34,81,133,0.8)",
      },
      {
        offset: 0,
        color: "rgba(34,81,133,0.5)",
      },
    ]),
  },
  emphasis: {
    focus: "series",
  },
  data: data111,
},
{
  showSymbol: false,
  name: "苏苏小苏苏",
  type: "lines",
  smooth: false,
  coordinateSystem: "cartesian2d",
  zlevel: 1,
  effect: {
    show: true,
    smooth: true,
    period: 6,
    symbolSize: 4,
  },
  lineStyle: {
    color: "#fff",
    width: 1,
    opacity: 0,
    curveness: 0,
    cap: "round",
  },
  data: datacoords,
},
],
};


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize",function(){
      myChart.resize();
  });

}




function getData() {
  // value为值
  let dataGet1 = Math.floor(Math.random() * 10 +5);
  data111.push(dataGet1);
  console.log(getNewTime());
  xdata111.push(getNewTime());
  xdata111.shift();
  data111.shift();
  console.log(xdata111)
}
function getNewTime(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  // 补零
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  return hours+'-'+minutes+'-'+seconds;
}

function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        var option = {
          //标题
          title: {
              text: '血压检测',
              x: 20
          },
          visualMap: [
              {
                  show: false,
                  type: 'continuous',
                  seriesIndex: 0,
                  min: 0,
                  max: 100
              }
          ],
          tooltip: {
              trigger: 'axis',
          },
          axisPointer: {
              animation: false
          },
          color: [ "red"],
          legend: {
              orient: 'horizontal',
              x: '200',
              y: '20',
              data: [ "舒张压"]
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              name: '时间/s',
              type: 'category',
              boundaryGap: false,
              splitLine: {
                  show: false
              },
              data: [1,2,3,4]
          },
          yAxis: {
              name: "血压/mmHg",
              boundaryGap: [0, 0],
              type: 'value',
              min: 40,
              max: 180,
              axisLine: {
                  lineStyle: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0.3,
                          color: '#0c7bb3'
                      },
                      {
                          offset: 0,
                          color: '#f2bae8'
                      }
                      ])
                  }
              },
              axisLabel: {
                  formatter: '{value}',
                  align: 'center'
              }
          },
          series: [
              {
                  name: '舒张压',
                  type: 'line',
                  smooth: true,
                  symbolSize: 10,
                  label: {
                      show: true,
                      color: 'yellow',
                      formatter: function (data) {
                          return data.value;
                      }
                  },
                  itemStyle: {
                      normal: {
                          lineStyle: {
                              width: 5,//设置线条粗细
                              color: new echarts.graphic.LinearGradient(1, 1, 0, 1, [{
                                  offset: 0,
                                  color: '#81ffef'
                              },
                              {
                                  offset: 1,
                                  color: '#f067b4'
                              }
                              ]),
                          }
                      }
                  },
                  data: [1,2,3,4]
              }
          ]
      };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function map() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('map'));

      var nameColor = " rgb(55, 75, 113)"
      var name_fontFamily = '宋体'
      var name_fontSize = 35
      var mapName = 'china'
      var data = []
      var geoCoordMap = {};
      var toolTipData = [];
      var valueTemp = [{target: '11',TT:'22',end:'33',name:'44',num:'136****9797'},{target: '111',TT:'222',end:'333',name:'444',num:'136****9797'}]
      /*获取地图数据*/
      myChart.showLoading();
      var mapFeatures = echarts.getMap(mapName).geoJson.features;
      myChart.hideLoading();
      let i =1
      mapFeatures.forEach(function(v) {
          // 地区名称
          var name = v.properties.name;
          var temp = Math.round(Math.random() * 100 + 10)
          // 地区经纬度
          geoCoordMap[name] = v.properties.cp;
          data.push({
              name: name,
              value: Math.round(Math.random() * 100 + 10)
          })                         
          toolTipData.push({
              // name: name,
              value: [{
                  name: "目的地址",
                  value: valueTemp[1].target
              },
                  {
                      name: "运输单位",
                      value: valueTemp[1].TT
                  },
                  {
                      name: "目的地址",
                      value: valueTemp[1].end
                  },
                  {
                      name: "司机姓名",
                      value:valueTemp[1].name
                  },
                  {
                      name: "联系方式",
                      value:  valueTemp[1].num
                  }
              ]
          })
      });

      var max = 480,
          min = 9; // todo
      var maxSize4Pin = 50,
          minSize4Pin = 20;

      var convertData = function(data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
              var geoCoord = geoCoordMap[data[i].name];
              if (geoCoord) {
                  res.push({
                      name: data[i].name,
                      value: geoCoord.concat(data[i].value),
                  });
              }
          }
          return res;
      };

      option = {



          tooltip: {
              trigger: 'item',
              formatter: function(params) {
                  if (typeof(params.value)[2] == "undefined") {
                      var toolTiphtml = ''
                      for(var i = 0;i<toolTipData.length;i++){
                          if(params.name==toolTipData[i].name){
                              toolTiphtml += toolTipData[i].name+':<br>'
                              for(var j = 0;j<toolTipData[i].value.length;j++){
                                  toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                              }
                          }
                      }
                      console.log(toolTiphtml)
                      // console.log(convertData(data))
                      return toolTiphtml;
                  } else {
                      var toolTiphtml = ''
                      for(var i = 0;i<toolTipData.length;i++){
                          if(params.name==toolTipData[i].name){
                              toolTiphtml += toolTipData[i].name+':<br>'
                              for(var j = 0;j<toolTipData[i].value.length;j++){
                                  toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                              }
                          }
                      }
                      console.log(toolTiphtml)
                      // console.log(convertData(data))
                      return toolTiphtml;
                  }
              }
          },
          legend: {
              orient: 'vertical',
              y: 'bottom',
              x: 'right',
              data: ['credit_pm2.5'],
              textStyle: {
                  color: '#fff'
              }
          },
          visualMap: {
              show: false,
              min: 0,
              max: 600,
              left: 'left',
              top: 'bottom',
              text: ['高', '低'], // 文本，默认为数值文本
              calculable: true,
              seriesIndex: [1],
              inRange: {
                  // color: ['#3B5077', '#031525'] // 蓝黑
                  // color: ['#ffc0cb', '#800080'] // 红紫
                  // color: ['#3C3B3F', '#605C3C'] // 黑绿
                  //  color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                  // color: ['#23074d', '#cc5333'] // 紫红
                  //   color: ['#00467F', '#A5CC82'] // 蓝绿
                  // color: ['#1488CC', '#2B32B2'] // 浅蓝
                  // color: ['#00467F', '#A5CC82','#ffc0cb'] // 蓝绿红
                  // color: ['#00467F', '#A5CC82'] // 蓝绿
                  // color: ['#00467F', '#A5CC82'] // 蓝绿
                  // color: ['#00467F', '#A5CC82'] // 蓝绿
                  color: ['#22e5e8', '#0035f9','#22e5e8'] // 蓝绿

              }
          },
          /*工具按钮组*/
          toolbox: {
              show: false,
              orient: 'vertical',
              left: 'right',
              top: 'center',
              feature: {

                  dataView: {
                      readOnly: false
                  },
                  restore: {},
                  saveAsImage: {}
              }
          },
          geo: {
              show: true,
              map: mapName,
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: false
                  }
              },
              roam: true,
              itemStyle: {
                  normal: {
                      areaColor: '#031525',
                      borderColor: '#097bba'
                  },
                  emphasis: {
                      areaColor: '#2B91B7'
                  }
              }
          },
          series: [{
              name: '散点',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: convertData(data),
              symbolSize: function(val) {
                  return val[2] / 10;
              },
              label: {
                  normal: {
                      formatter: '{b}',
                      position: 'right',
                      show: false
                  },
                  emphasis: {
                      show: false
                  }
              },
              itemStyle: {
                  normal: {
                      color: 'rgba(255,255,0,0.8)'
                  }
              }
          },
              {
                  type: 'map',
                  map: mapName,
                  geoIndex: 0,
                  aspectScale: 0.75, //长宽比
                  showLegendSymbol: false, // 存在legend时显示
                  label: {
                      normal: {
                          show: true
                      },
                      emphasis: {
                          show: false,
                          textStyle: {
                              color: '#fff'
                          }
                      }
                  },
                  roam: true,
                  itemStyle: {
                      normal: {
                          areaColor: '#031525',
                          borderColor: '#3B5077',
                      },
                      emphasis: {
                          areaColor: '#2B91B7'
                      }
                  },
                  animation: false,
                  data: data
              },
              {
                  name: '点',
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  symbol: 'pin', //气泡
                  symbolSize: function(val) {
                      var a = (maxSize4Pin - minSize4Pin) / (max - min);
                      var b = minSize4Pin - a * min;
                      b = maxSize4Pin - a * max;
                      return a * val[2] + b;
                  },
                  label: {

                      normal: {
                          show: false,
                          formatter:function (params) { return params.data.value[2] },
                          textStyle: {
                              color: '#fff',
                              fontSize: 9,
                          }
                      }
                  },
                  itemStyle: {

                      normal: {
                          color: 'rgba(255,255,0,0)', //标志颜色
                      }
                  },
                  zlevel: 6,
                  data: convertData(data),
              },
              {
                  name: 'Top 5',
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  data: convertData(data.sort(function(a, b) {
                      return b.value - a.value;
                  }).slice(0, 5)),
                  symbolSize: function(val) {
                      return val[2] / 10;
                  },
                  showEffectOn: 'render',
                  rippleEffect: {
                      brushType: 'stroke'
                  },
                  hoverAnimation: true,
                  label: {
                      normal: {
                          formatter: '{b}',
                          position: 'right',
                          show: true
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'rgba(255,255,0,0.8)',
                          shadowBlur: 10,
                          shadowColor: '#05C3F9'
                      }
                  },
                  zlevel: 1
              },

          ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
  }
})