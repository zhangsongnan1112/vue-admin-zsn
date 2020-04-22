<template>
  <!-- 条形图 -->
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
    yName: {
      type: String,
      default: '家'
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
  data () {
    return {
      colorArray: [
        // { top: '#ffa800',  bottom: 'rgba(11,42,84,.3)'},  // 黄
        // { top: '#1ace4a', bottom: 'rgba(11,42,84, 0.3)' }, // 绿
        // { top: '#4bf3ff', bottom: 'rgba(11,42,84,.3)' },  // 蓝
        { top: '#2DC3FB', bottom: '#183DCF' } // 深蓝
        // { top: '#b250ff', bottom: 'rgba(11,42,84,.3)' } // 粉
      ]
    }
  },
  computed: {
    option () {
      const tip = this.legend
      const colors = this.colorArray
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
            return params.name + '<hr size="1" color="#2BB7FF" />' + tip + ':' + params.value
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
        xAxis: {
          type: 'value',
          position: 'top',
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(32,57,163,1)'
            }
          },
          axisLabel: {
            textStyle: { color: '#fff' }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [{
          type: 'category',
          name: this.legend,
          nameTextStyle: {
            color: '#fff',
            verticalAlign: 'top',
            align: 'left',
            padding: [-400, 0, 20, -90]
          },
          axisTick: {
            show: false,
            alignWithLabel: false,
            length: 5
          },
          splitLine: { // 网格线
            show: false
          },
          inverse: true, // 排序
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          data: this.xAxis
        }],
        series: [
          {
            name: '能耗值',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
                textStyle: {
                  color: 'white' // color of value
                }
              }
            },
            itemStyle: {
              normal: {
                show: true,
                color: function (params) {
                  const num = colors.length
                  return {
                    type: 'linear',
                    colorStops: [{
                      offset: 0,
                      color: colors[params.dataIndex % num].bottom
                    },
                    {
                      offset: 1,
                      color: colors[params.dataIndex % num].top
                    }]
                  }
                },
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: this.yAxis
          }
        ]
      }
    }
  }
}
</script>
