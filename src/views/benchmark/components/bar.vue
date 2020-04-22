<template>
  <eCharts :option="option" />
</template>

<script>
import eCharts from '@/components/Echarts'
export default {
  components: {
    eCharts
  },
  props: {
    series: {
      type: Array,
      default () {
        return []
      }
    },
    yAxis: {
      type: Array,
      default () {
        return []
      }
    },
    xAxis: {
      type: Array,
      default () {
        return []
      }
    },
    legend: {
      type: String,
      default: '企业数量'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    option () {
      const tip = this.legend
      return {
        backgroundColor: '#0F1235',
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          padding: 10,
          backgroundColor: 'rgba(0,0,0,.5)',
          formatter: (params) => {
            return params.name + '<hr size="1" color="#2BB7FF"/>' + tip + ':' + params.value
          }
        },
        grid: {
          show: false,
          top: 80,
          bottom: '20%',
          containLabel: false,
          tooltip: {
            show: true,
            trigger: 'item',
            textStyle: {
              color: '#f2f2f2'
            }
          }
        },
        xAxis: [
          {
            type: 'category',
            data: this.xAxis, // 变量
            axisTick: {
              alignWithLabel: true
            },
            nameTextStyle: {
              color: '#82b0ec'
            },
            axisLine: {
              lineStyle: {
                color: '#82b0ec'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
              interval: 0,
              margin: 40
            }
          }
        ],
        yAxis: {
          type: 'value',
          name: this.legend,
          nameTextStyle: {
            color: '#fff',
            verticalAlign: 'top',
            align: 'left',
            padding: [-6, 0, 20, -50]
          },
          nameLocation: 'end',
          nameGap: 20,
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
            // "formatter": "{value}%"
          },
          splitLine: {
            lineStyle: {
              color: '#0c2c5a'
            }
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [60, 16],
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            z: 10,
            // "barWidth": "0",
            label: {
              normal: {
                show: true,
                position: 'top',
                // "formatter": "{c}%"
                fontSize: 14,
                fontWeight: 'bold',
                color: '#34DCFF'
              }
            },
            data: this.getData(this.yAxis).data1
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [60, 16],
            symbolOffset: [0, 10],
            // "barWidth": "20",
            z: 10,
            data: this.getData(this.yAxis).data2
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [90, 30],
            symbolOffset: [0, 20],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#2EA9E5',
                borderType: 'solid',
                borderWidth: 1
              }
            },
            data: this.yAxis
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [120, 40],
            symbolOffset: [0, 30],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#19465D',
                borderType: 'solid',
                borderWidth: 2
              }
            },
            data: this.yAxis
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                // color: '#14b1eb',
                opacity: 0.9
              }
            },
            // silent: true,
            barWidth: '60',
            barGap: '10%',
            barCateGoryGap: '10%',
            data: this.getData(this.yAxis).data3
          }
        ]
      }
    }
  },
  methods: {
    getData (data) {
      var res = {
        data1: [],
        data2: [],
        data3: []
      }
      // var colors = ['#2DB1EF', '#2DB1EF', '#1B6A95']
      for (var i = 0; i < data.length; i++) {
        res.data1.push({
          value: data[i],
          itemStyle: {
            color: '#2DB1EF'
          }
        })
        res.data2.push({
          value: data[i],
          itemStyle: {
            color: '#2DB1EF'
          }
        })
        res.data3.push({
          value: data[i],
          itemStyle: {
            color: '#1B6A95'
          }
        })
      }
      return res
    }
  }
}
</script>
