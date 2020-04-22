<template>
  <div class="my_echarts_wrap">
    <div ref="el" class="echart_123" :resize="isResize"></div>
    <img v-if="placeholder" class="placeholder"  alt="暂无数据">
  </div>
</template>

<script>
var echarts = require('echarts')
// 不要再公共组件里引入地图数据，使用时在相应的页面组件引入地图
// import china from 'echarts/map/json/china.json'
// echarts.registerMap('china', china)
export default {
  name: 'Index',
  props: {
    option: {
      type: Object,
      required: true
    },
    isResize: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      chart: null,
      isUpdate: false
    }
  },
  computed: {
    placeholder () {
      if (this.option.series && this.option.series.length === 0 && this.isUpdate) {
        return true
      } else if (this.option.series && this.isUpdate) {
        if (this.option.series[0].data && this.option.series[0].data.length === 0) {
          return true
        }
      }
      return false
    }
  },
  watch: {
    option: {
      handler (newVal, oldVal) {
        this.setOptions()
        this.isUpdate = true
      },
      deep: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initCharts()
    })
    this.$on('rebuild', () => {
      this.rebuild()
    }) // 设置接收父组件的方法
  },
  methods: {
    initCharts () {
      this.chart = echarts.init(this.$refs.el)
      this.setOptions()
    },
    click (param) {
      this.$emit('chartClick', param)
    },
    // mouseover(param) {
    //   this.$emit('chartMouseOver', param)
    // },
    setOptions () {
      if (this.chart) {
        // console.log(this.chart)
        this.chart.setOption(this.option, true)
        this.chart.on('click', this.click)
        this.chart.on('mouseover', this.mouseover)
      }
    },
    rebuild () {
      if (this.chart) {
        this.chart.dispose()
        this.initCharts()
      }
    }
  }
}
</script>

<style scoped>
  .echart_123 {
    width: 100%;
    height: 100%;
  }
  .my_echarts_wrap{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .placeholder{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 9;
    max-width: 40%;
    max-height: 40%;
  }
</style>
