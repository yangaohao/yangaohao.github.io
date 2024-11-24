(function(){
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    // 指定图表的配置项和数据
    var option = {
      // 线条颜色
      ccolor: ['#4c9bfd', '#f67e7d', '#f5b225', '#5eb95e', '#607fa6'],
      // 标题
      // title: {
      //   text: 'Stacked Area Chart'
      // },
      // 提示框
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      // 图例
      legend: {
        data: ['Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        textStyle: {
          // 图例文字颜色
          color: '#fff'
        }
      },
      // 工具箱 可以保存图片等其他功能
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      // 网格配置 ，控制直角坐标系的图表大小
      grid: {
        left: '2%',
        right: '4%',
        bottom: '1%',
        // top: 'auto',
        // 显示边框线
        show: true,
        // 边框线颜色
        borderColor: '#012f4a',
        // borderColor: 'red',
        // 显示刻度标签 ture显示 false不显示
        containLabel: true
      },
      // x轴
      xAxis: [
        {
          type: 'category',
          // 是否让我们的线条与坐标轴有空隙
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            // 去除刻度线
            show: false,
          },
          axisLine: {
            // 去除轴线
            show: false,
          },
          axisLabel: {
            // x轴文字颜色
            color: '#4c9bfd'
          }
        }
      ],
      // y轴上的刻度标签
      yAxis: [
        {
          type: 'value',
          splitLine: {
            // 去除网格线
            show: false,
          },
          axisTick: {
            // 去除刻度线
            show: false,
          },
          axisLine: {
            // 去除轴线
            show: false,
          },
          axisLabel: {
            // x轴文字颜色
            color: '#4c9bfd'
          }
        }
        
      ],
      series: [
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top',
            color: '#fff'
          },
          areaStyle: {},
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      });
})();