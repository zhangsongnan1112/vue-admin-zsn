<template>
  <div class="zs-focus-company">
    <div class="zs-focus-search">
      <h3 class="zs-focus-search-title">添加监控企业</h3>
      <el-select
        v-model="companyValue"
        placeholder="请输入企业名称"
        filterable
        remote
        clearable
        :remote-method="remoteAddCompany"
        @change="selectGet"
      >
        <el-option
          v-for="item in companyoptions"
          :key="item.ent_id"
          :label="item.ENTNAME"
          :value="item.ent_id"
        >
        </el-option>
      </el-select>
      <el-button type="primary" @click="getDetail">搜索</el-button>
      <h3 class="zs-focus-search-title">已关注企业检索</h3>
      <span>时间范围：</span>
      <el-date-picker
        v-model="timeValue"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
        popper-class="zs-date-picker"
      >
      </el-date-picker>
      <el-button type="primary" @click="searchTime">查找</el-button>
      <!-- <el-button type="info">清除</el-button> -->
      <h3 class="zs-focus-search-title">关注企业列表<span class="zs-table-totle">共<i>{{ tableData.total }}</i>条数据</span></h3>
    </div>
    <el-table
      class="table-list"
      :data="tableData.data"
      style="width: 100%"
      empty-text="暂无数据"
      :header-cell-style="{background:'#E3E8EE',color:'#212121'}"
      @row-click="goReport"
    >
      <el-table-column
        v-for="(item, index) in headerData"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        align="center"
      />
      <el-table-column label="操作" align="center" width="240px">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click.stop="cancelFocus(scope.row)">取消监制</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="limit"
      :total="tableData.total"
      :current-change="handleCurrentChange"
    >
    </el-pagination>
    <company-popup :table-data="currentdialogData" :show-dialog="showpop" @beforeColse="closedPop" @addFocus="addFouceCompany"></company-popup>
  </div>
</template>
<script>
import { getFocusCompanyApi, postFouceApi, deleteFouceApi, fuzzyCompanyName, getCompanyDatail } from '@/api/personalCenter'
import companyPopup from './companyPopup'
const tableDef = [
  [
    { name: '工商注册号：', prop: 'REGNO' },
    { name1: '统一社会信用码：', prop: 'UNISCID' }
  ],
  [
    { name: '法人代表：', prop: 'NAME' },
    { name1: '注册资本：', prop: 'REGCAP' }
  ],
  [
    { name: '经营状态：', prop: 'ENTSTATUS' },
    { name1: '注册日期：', prop: 'ESDATE' }
  ],
  [
    { name: '所在地：', prop: 'REGION_NAME' },
    { name1: '', prop: '' }
  ],
  [
    { name: '经济行业分类：', prop: 'OPSCOPE' },
    { name1: '', prop: '' }
  ]
]
export default {
  components: {
    companyPopup
  },
  data () {
    return {
      headerData: [
        { label: '关注时间', prop: 'operat_time' }, { label: '企业名称', prop: 'ent_name' },
        { label: '法人', prop: 'person_name' }, { label: '所在地区', prop: 'region_id' },
        { label: '所属行业', prop: 'nic' }, { label: '状态', prop: 'ent_status' }
      ],
      dialogData: {},
      companyloading: false,
      companyoptions: [],
      companyName: '',
      companyValue: '',
      timeValue: '',
      tableData: {},
      startTime: '',
      endTime: '',
      showpop: false,
      page: 1,
      limit: 10
    }
  },
  computed: {
    currentdialogData: {
      get () {
        return tableDef.map(([left, right]) => {
          this.formatData(left, 'left')
          this.formatData(right, 'right')
          return {
            ...left,
            ...right
          }
        })
      },
      set () {}
    }
  },
  created () {
    // this.getTableData()
  },
  methods: {
    closedPop () {
      this.showpop = false
    },
    formatData (obj, prefix) {
      obj[prefix] = obj.prop === 'REGCAP' ? this.dialogData[obj.prop] + '万元' : obj[prefix] = this.dialogData[obj.prop]
    },
    selectGet (vid) {
      if (vid) {
        const obj = this.companyoptions.find(item => {
          return item.ent_id === vid
        })
        this.companyName = obj.ENTNAME
      } else {
        this.companyName = ''
      }
    },
    handleCurrentChange (val) {
      this.page = val
      this.getTableData()
    },
    searchTime () {
      this.page = 1
      if (this.timeValue !== null) {
        [this.startTime, this.endTime] = this.timeValue
      } else {
        this.startTime = ''
        this.endTime = ''
      }
      this.getTableData()
    },
    async getTableData () {
      const params = {
        start_time: this.startTime,
        end_time: this.endTime,
        page_index: this.page,
        page_size: this.limit
      }
      const res = await getFocusCompanyApi(params)
      if (res.code === 0) {
        this.tableData = res.data
      }
    },
    goReport (row, column) {
      this.$router.push({path: '/report', query: { id: row.ent_id }})
    },
    // 关注企业
    async addFouceCompany () {
      const res = await postFouceApi({ ent_id: this.companyValue, ent_name: this.companyName })
      this.showpop = false
      if (res.code === 0) {
        this.$message.success('关注成功')
        this.getTableData()
      }
    },
    async cancelFocus (row) {
      const { code } = await deleteFouceApi({ ent_id: row.ent_id })
      if (code === 0) {
        this.$message.success('取消监制成功')
      }
    },
    // 模糊搜索
    async remoteAddCompany (query) {
      if (query !== '') {
        const res = await fuzzyCompanyName({ key: query })
        if (res.code === 0) {
          this.companyoptions = res.data
        }
      }
    },
    async getDetail () {
      const params = {
        'node_id': this.companyValue,
        'node_type': '1'
      }
      if (this.companyValue !== '') {
        const { code, data, error } = await getCompanyDatail(params)
        if (code === 0) {
          this.showpop = true
          this.dialogData = data.content
        } else {
          this.$message.error(error)
        }
      } else {
        this.$message.info('请输入企业名称')
      }
    }
  }
}
</script>
<style lang="scss" scoped src="./index.scss"></style>
<style lang="scss" scoped>
  $mainColor:#0464CB;
  .el-table /deep/ .el-table__body-wrapper tbody{
      td {
          border-bottom: none!important;
      }
  }
  .el-input__inner {
      width:280px!important;
      margin-right: 30px;
  }
  .el-select {
    margin-right: 30px!important;
  }
  .el-select /deep/ .el-input.is-focus .el-input__inner {
    border-color: $mainColor!important;
  }
  .el-button--primary {
    background:$mainColor!important;
    border-color:$mainColor!important;
  }
  .el-pagination {
    text-align:center;
    margin-top:30px;
    margin-bottom: 60px;
  }
  .el-pagination /deep/ {
      .el-pager {
        li {
          background-color: #fff;
          border:1px  solid $mainColor;
          color: $mainColor;
        }
        li:not(.display):hover {
          color: $mainColor;
        }
        li:not(.disabled).active {
          background-color:$mainColor!important;
           color: #fff;
        }
      }
      .btn-prev, .btn-next {
        border: 1px solid #A8AFB9;
        background-color:#fff!important;
        color:   $mainColor!important;
      }
  }
  .table-list /deep/{
    .el-table__body tr:hover>td {
      background-color: #E3E8EE;
      color:#0464CB ;
      cursor: pointer;
    }
  }
  .table-list::before {
      height: 0;;
  }
</style>
