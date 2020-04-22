<template>
  <div>
    <div class="chart" style="width:100%;height:524px">
      <components :is="currentComponent" :legend="legend" :y-axis="yAxis" :x-axis="xAxis"></components>
      <pieCharts
        v-if="echartsId === 'H'"
        :legend="legend"
        :data="pieData"
      />
    </div>
    <select-form :form-data="formData" :active-calss="activeCalss" @changeChart="changeChartEmit"></select-form>
    <!-- 尝试用一个表格 控制表头 指标切换的时候会有问题 先用两个表格吧 后期在优化吧 -->
    <div v-show="formData.itemId.zhibiaoId == '1'" class="table-list table-list1">
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        height="600"
      >
        <el-table-column
          prop="region_name"
          width="190"
          :resizable="false"
        >
          <template slot-scope="scope">
            <span style="margin-left:24px;" class="header-checkbox" :class="{'checkbox-active': scope.row.checked}" @click="regionSelect(scope,$event)"></span>
            {{ scope.row.region_name }}
          </template>
        </el-table-column>
        <el-table-column
          v-for="(item,key) in headerData"
          :key="key"
          :resizable="false"
          :label="item.label"
          :data-checked="item.label"
          align="center"
          :prop="item.prop"
          :render-header="renderFirHeader"
        >
        </el-table-column>
      </el-table>
    </div>
    <div v-show="formData.itemId.zhibiaoId == '2'" class="table-list table-list2">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="600"
        border
      >
        <el-table-column
          prop="region_name"
          width="190"
          :resizable="false"
          fixed="left"
        >
          <template slot-scope="scope">
            <span style="margin-left:24px;" class="header-checkbox" :class="{'checkbox-active': scope.row.checked}" @click="regionSelect(scope,$event)"></span>
            {{ scope.row.region_name }}
          </template>
        </el-table-column>
        <el-table-column v-for="(item,key) in headerData" :key="key" :label="item.label" align="center" :prop="item.prop" :resizable="false">
          <el-table-column
            v-for="(it,index) in item.child"
            :key="index"
            :label="it.label"
            :prop="it.prop"
            align="center"
            :resizable="false"
            :render-header="renderHeader"
          >
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <pop-up :show-pop="showPop" @closePop="showPop = false"></pop-up>
  </div>
</template>
<script>
import { barHorChart, barCharts, pieCharts, popUp, selectForm } from './components'
// import { getListApi } from '@/api/benchmark'
import { headerData } from './headerData'
// import autoResize from '@/utils/resize.js'
export default {
  components: {
    barCharts,
    barHorChart,
    pieCharts,
    popUp,
    selectForm
  },
  data () {
    return {
      formData: {
        'zhibiaoId': {
          type: 'select',
          label: '指标选择:',
          list: [
            {
              name: '一级指标',
              code: '1'
            },
            {
              name: '二级指标',
              code: '2'
            }
          ],
          changeEvent: () => {
            this.changeSelct()
          }
        },
        itemId: {
          zhibiaoId: '1'
        }
      },
      activeCalss: 0,
      headerData: headerData,
      showPop: false,
      tableData: [],
      legend: '社会环境',
      imgData: [],
      yAxis: [],
      echartsId: 'Z',
      pieData: [],
      currentColumn: 'A01',
      firstzhibiaoValue: [],
      sendZhibiaoValue: []
    }
  },
  computed: {
    xAxis () {
      return this.imgData.map((item) => {
        return item.region_name
      })
    },
    currentComponent () {
      const map = {
        'Z': 'barCharts',
        'T': 'barHorChart'
      }
      return map[this.echartsId]
    }
  },
  created () {
    // this.$loading.show()
    this.getList({ level: this.formData.itemId.zhibiaoId, year: new Date().getFullYear() - 2 }, 'A01')
    this.dafaultFun()
    this.ZhibiaoValue()
  },
  // mounted() {
  //   autoResize.open()
  // },
  // destroyed() {
  //   autoResize.close()
  // },
  methods: {
    ZhibiaoValue () {
      this.firstzhibiaoValue = new Array(5).fill(false)
      this.firstzhibiaoValue[0] = true
      this.sendZhibiaoValue = new Array(17).fill(false)
      this.sendZhibiaoValue[0] = true
    },
    // 默认显示七个直辖市
    dafaultFun () {
      const city = ['北京市', '天津市', '上海市', '河北省', '成都市', '四川省', '广州市']
      const defaultData = this.tableData.filter((item, index) => {
        if (city.includes(item.region_name)) {
          this.tableData[index].checked = true
        }
        return city.includes(item.region_name)
      })
      this.imgData = [...defaultData]
    },
    changeSelct () {
      if (this.formData.itemId.zhibiaoId === '1') {
        this.getList({ level: this.formData.itemId.zhibiaoId, year: new Date().getFullYear() - 2 }, 'A01')
        this.currentColumn = 'A01'
      } else {
        this.legend = '经济发展'
        this.getList({ level: this.formData.itemId.zhibiaoId, year: new Date().getFullYear() - 2 }, 'A0101')
        this.filterTable('A0101')
        this.currentColumn = 'A0101'
      }
      this.pieFun()
    },
    addTableData () {
      this.tableData.forEach(item => {
        this.$set(item, 'checked', false)
      })
    },
    getList (param, val) {
      // getListApi(param).then(res => {
      //   if (res && res.code === 0) {
      //     this.$loading.hide()
      //     this.tableData = res.data
      //     this.addTableData()
      //     this.dafaultFun()
      //     this.filterTable(val)
      //     this.pieFun()
      //   }
      // })
      this.tableData = [{region_name: '北京', a: 1, a1: 2}]
    },
    pieFun () {
      this.pieData = []
      this.yAxis.forEach((item, index) => {
        this.pieData.push({ name: this.xAxis[index], value: this.yAxis[index] })
      })
    },
    changeChartEmit (item, index) {
      this.activeCalss = index
      this.echartsId = item
    },
    filterTable (val) {
      this.yAxis = []
      this.imgData.map(item => {
        return this.yAxis.push(item[val])
      })
    },
    renderFirHeader (h, { column, $index }) {
      return h(
        'div',
        [
          h('span', {
            'class': {
              'checkbox-active': this.firstzhibiaoValue[$index - 1],
              'header-checkbox': true
            },
            on: {
              click: ($event) => {
                this.select($event, column, $index, 'firstzhibiaoValue')
              }
            }
          }),
          h('span', column.label)
        ]
      )
    },
    renderHeader (h, { column, $index }) {
      return h(
        'div',
        [
          h('span', {
            'class': {
              'checkbox-active': this.sendZhibiaoValue[$index],
              'header-checkbox': true
            },
            on: {
              click: ($event) => {
                this.select($event, column, $index, 'sendZhibiaoValue')
              }
            }
          }),
          h('span', column.label)
        ]
      )
    },
    // 指标选择
    select ($event, column, index, value) {
      let currentIndex = index
      if (value === 'firstzhibiaoValue') {
        currentIndex = currentIndex - 1
      }
      let isSelect = false
      isSelect = this[value].some((item) => {
        return item === true
      })
      // 表头数据实现单选
      if (isSelect) {
        if (this[value][currentIndex]) {
          this.$set(this[value], currentIndex, false)
        } else {
          this.showPop = true
        }
      } else {
        this.currentColumn = column.property
        this.$set(this[value], currentIndex, true)
        this.legend = column.label
        this.filterTable(column.property)
      }
      this.pieFun()
    },
    // 区域选择
    regionSelect (scope, $event) {
      if (scope.row.checked) {
        scope.row.checked = false
        this.imgData = this.imgData.filter((item) => {
          return item.checked === true
        })
        this.filterTable(this.currentColumn)
      } else {
        scope.row.checked = true
        this.imgData.push(scope.row)
        this.filterTable(this.currentColumn)
      }
      this.pieFun()
    }
  }
}
</script>
<style  lang="scss" src='./index.scss'></style>
