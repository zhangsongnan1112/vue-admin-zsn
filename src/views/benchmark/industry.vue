<template>
  <div>
    <div class="chart" style="width:100%;height:524px">
      <pop-up
        :show-pop="showPop"
        @closePop="showPop = false"
      ></pop-up>
      <components :is="currentComponent" :legend="legend" :y-axis="yAxis" :x-axis="xAxis"></components>
      <pieCharts
        v-if="echartsId === 'H'"
        :legend="legend"
        :data="pieData"
      />
    </div>
    <select-form :form-data="formData" :active-calss="activeCalss" @changeChart="changeChartEmit"></select-form>
    <div v-if="imgData && headerData" class="table-list table-list2">
      <el-table
        :data="tableData"
        style="width: 100%"
        max-height="600"
        empty-text="暂无数据"
      >
        <el-table-column
          prop="region_namae"
          width="230"
          fixed="left"
        >
          <template slot-scope="scope">
            <span style="margin-left:24px;" class="header-checkbox" :class="{'checkbox-active': scope.row.checked}" @click="regionSelect(scope,$event)"></span>
            {{ scope.row.region_namae }}
          </template>
        </el-table-column>
        <el-table-column v-for="(item,key) in headerData" :key="key" :label="item.name" align="center">
          <el-table-column
            v-for="(it,index) in item.child"
            :key="index"
            width="120"
            :label="it.name"
            :prop="it.code"
            align="center"
            :render-header="renderHeader"
          >
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { barHorChart, barCharts, pieCharts, popUp, selectForm } from './components'
// import { getMarkApi, getHeaderApi } from '@/api/benchmark'
// import { getRegionApi, getIndustryApi, getTimeApi } from '@/api/common'
import { cityData } from './headerData'
import {header, DataF} from './data'
export default {
  components: {
    barHorChart,
    barCharts,
    pieCharts,
    popUp,
    selectForm
  },
  data () {
    return {
      formData: {
        'regionId': {
          type: 'select',
          label: '区域选择:',
          list: [],
          changeEvent: () => {
            this.getTableList(this.currentColumn)
          }
        },
        'industryId': {
          type: 'select',
          label: '产业选择:',
          list: [],
          changeEvent: () => {
            this.getTableList(this.currentColumn)
          }
        },
        'tyear': {
          type: 'select',
          label: '时间选择:',
          list: [],
          changeEvent: () => {
            this.getTableList(this.currentColumn)
          }
        },
        itemId: {
          regionId: '-1',
          industryId: 'A01',
          tyear: new Date().getFullYear() - 2
        }
      },
      activeCalss: 0,
      showPop: false,
      currentColumn: 'a1',
      echartsId: 'Z',
      tableData: [],
      imgData: [],
      headerData: header.data,
      legend: '累计公司数量(家)', // y轴单位
      yAxis: [], // y轴值
      pieData: [],
      zhibiaoValue: []
    }
  },
  computed: {
    xAxis () {
      return this.imgData.map((item) => {
        return item.region_namae
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
    // this.getRegion()
    // this.getIndustry()
    // this.getTime()
    this.getTableList('a1')
    // this.setzhibiaoValue()
    // this.getHeaderList()
  },
  methods: {
    setzhibiaoValue () {
      this.zhibiaoValue = new Array(34).fill(false)
      this.zhibiaoValue[0] = true
    },
    // getRegion () {
    //   getRegionApi().then(res => {
    //     if (res && res.code === 0) {
    //       const all = {
    //         code: '-1',
    //         name: '全国'
    //       }
    //       res.data.unshift(all)
    //       this.formData.regionId.list = res.data
    //     }
    //   })
    // },
    // getIndustry () {
    //   getIndustryApi().then(res => {
    //     if (res && res.code === 0) {
    //       this.formData.industryId.list = [...res.data]
    //     }
    //   })
    // },
    // getTime () {
    //   getTimeApi().then(res => {
    //     if (res && res.code === 0) {
    //       const data = res.data
    //       data.forEach((item, index) => {
    //         this.formData.tyear.list.push({ 'code': item, 'name': item })
    //       })
    //       console.log(this.formData.tyear.list)
    //     }
    //   })
    // },
    // 默认显示七个直辖市
    dafaultFun () {
      const city = cityData
      const defaultData = this.tableData.filter((item, index) => {
        if (city.includes(item.region_namae)) {
          this.tableData[index].checked = true
        }
        return city.includes(item.region_namae)
      })
      this.imgData = [...defaultData]
    },
    async getTableList (val) {
      // this.$loading.show()
      try {
        // const params = {
        //   region_id: this.formData.itemId.regionId,
        //   nic_id: this.formData.itemId.industryId,
        //   year: this.formData.itemId.tyear
        // }
        // const res = await getMarkApi(params)
        // this.$loading.hide()
        // if (res.code === 0) {
        // this.tableData = res.data
        this.tableData = DataF.data
        this.tableData.forEach(item => {
          this.$set(item, 'checked', false)
        })
        this.dafaultFun()
        this.filterTable(val)
        this.pieFun()
        // }
      } catch (error) {
        console.log(error)
      }
    },
    async getHeaderList () {
      // const res = await getHeaderApi()
      // this.headerData = res.data
    },
    pieFun () {
      this.pieData = []
      this.yAxis.forEach((item, index) => {
        this.pieData.push({ name: this.xAxis[index], value: this.yAxis[index] })
      })
    },
    changeChartEmit (item, index) {
      this.echartsId = item
      this.activeCalss = index
    },
    renderHeader (h, { column, $index }) {
      return h(
        'div',
        [
          h('span', {
            'class': {
              'checkbox-active': this.zhibiaoValue[$index],
              'header-checkbox': true
            },
            on: {
              click: ($event) => {
                this.select($event, column, $index)
              }
            }
          }),
          h('span', column.label)
        ]
      )
    },
    // 表头数据实现单选
    select ($event, column, index) {
      let isSelect = false
      isSelect = this.zhibiaoValue.some((item) => {
        return item === true
      })
      if (isSelect) {
        if (this.zhibiaoValue[index]) {
          this.$set(this.zhibiaoValue, index, false)
        } else {
          this.showPop = true
        }
      } else {
        this.currentColumn = column.property
        this.$set(this.zhibiaoValue, index, true)
        this.legend = column.label
        this.filterTable(column.property)
      }
      this.pieFun()
    },
    filterTable (val) {
      this.yAxis = []
      this.imgData.map(item => {
        return this.yAxis.push(item[val])
      })
      var aa = this.yAxis.map((item) => {
        return Number(item.replace(/,/g, ''))
      })
      this.yAxis = [...aa]
    },

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
<style scoped lang="scss" src='./index.scss'></style>
