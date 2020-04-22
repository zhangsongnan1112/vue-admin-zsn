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
    data: {
      type: Array,
      required: true
    },
    legend: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      someValue: []
    }
  },
  computed: {
    option () {
      return {
        backgroundColor: '#0F1235',
        legend: {
          show: true,
          bottom: '10%',
          left: 'center',
          orient: 'horizontal',
          align: 'left',
          data: this.getArrayValue(this.data, 'name'),
          itemWidth: 30,
          itemHeight: 20,
          itemGap: 24,
          textStyle: {
            color: '#fff',
            fontSize: 14,
            lineHeight: 14,
            padding: [0, 0, 0, 10]
          }
        },
        tooltip: {
          show: true,
          trigger: 'item',
          padding: [10, 8],
          backgroundColor: 'rgba(0,0,0,.5)',
          formatter: '{b}<br><hr>{a}: {c}'
        },
        color: ['#2E48F3', '#16B9EF', '#12E8E0', '#FA3E5F', '#FBC83F', '#CA3DF8', '#2E48F3'],
        grid: {
          top: '2%',
          bottom: '70%',
          left: '50.5%',
          containLabel: false,
          color: '#fff',
          backgroundColor: 'red'
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            inside: true,
            textStyle: {
              color: '#fff',
              fontSize: 10
            },
            show: true
          },
          data: this.getData(this.data).yAxis
        }],
        xAxis: [{
          show: false
        }],
        series: this.getData(this.data).series
      }
    }
  },
  watch: {
    data: {
      handler (n) {
        // eslint-disable-next-line no-eval
        this.someValue = eval(this.getArrayValue(this.data, 'value').join('+'))
      },
      deep: true,
      immediate: true
    }

  },
  methods: {
    getArrayValue (array, index) {
      var key = index || 'value'
      var res = []
      if (array) {
        array.forEach(function (t) {
          res.push(t[key])
        })
      }
      return res
    },
    getData (data) {
      var res = {
        series: [],
        yAxis: []
      }
      for (let i = 0; i < data.length; i++) {
        res.series.push({
          name: this.legend,
          type: 'pie',
          clockWise: false, // 顺时加载
          hoverAnimation: false, // 鼠标移入变大
          radius: [73 - i * 7 + '%', 69 - i * 7 + '%'],
          center: ['50%', '40%'],
          label: {
            show: false
          },
          itemStyle: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          data: [{
            value: data[i].value,
            name: data[i].name
          }, {
            value: this.someValue - data[i].value,
            name: '',
            itemStyle: {
              color: 'rgba(0,0,0,0)',
              borderWidth: 0
            },
            tooltip: {
              show: false
            },
            hoverAnimation: false
          }]
        })
        res.series.push({
          name: '',
          type: 'pie',
          silent: true,
          z: 1,
          clockWise: false, // 顺时加载
          hoverAnimation: false, // 鼠标移入变大
          radius: [73 - i * 7 + '%', 69 - i * 7 + '%'],
          center: ['50%', '40%'],
          label: {
            show: false
          },
          itemStyle: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            borderWidth: 5
          },
          data: [{
            value: 7.5,
            itemStyle: {
              color: '#272A59',
              borderWidth: 0
            },
            tooltip: {
              show: false
            },
            hoverAnimation: false
          }, {
            value: 2.5,
            name: '',
            itemStyle: {
              color: 'rgba(0,0,0,0)',
              borderWidth: 0
            },
            tooltip: {
              show: false
            },
            hoverAnimation: false
          }]
        })
        res.yAxis.push(data[i].value)
      }
      return res
    }
  }
}
</script>
