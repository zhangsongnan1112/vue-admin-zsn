<template>
  <div class="db-wrap">
    <ul class="benchamark-tab">
      <li v-for="(item,index) in navtab" :key="index" :class="activeClass === index ? 'active' : ''" @click="changeTab(item, index)">{{ item }}</li>
    </ul>
    <div>
      <component :is="currentCompontent"></component>
    </div>
  </div>
</template>

<script>
import industry from './industry'
import environment from './environment'
export default {
  components: {
    industry,
    environment
  },
  data () {
    return {
      navtab: ['产业对标', '环境对标', '宏观对标'],
      tab: '产业对标',
      activeClass: 0
    }
  },
  computed: {
    currentCompontent () {
      const map = {
        '产业对标': 'industry',
        '环境对标': 'environment',
        '宏观对标': 'industry'
      }
      return map[this.tab]
    }
  },
  methods: {
    changeTab (item, index) {
      this.tab = item
      this.activeClass = index
    }
  }
}
</script>
<style  lang="scss" >
  /* 换肤 */
  .db-wrap {
    color:#f2f2f2;
    background: rgba(9,9,24,1);
    padding-top: 30px;
  }
  .db-wrap /deep/ .table-list .el-table__body{
    width: 100% !important;
  }
  .benchamark-tab {
    width: 70%;
    margin: 0 auto;
    display: flex;
    margin-bottom: 40px;
    li {
      font-size:18px;
      font-weight:500;
      color:#fff;
      margin-right: 60px!important;
      &.active {
        color: #3F60EA;
      }
    }
  }
  .db-wrap > ul > li{
    cursor: pointer;
  }
  .db-wrap > div {
    width: 85%;
    margin: 30px auto;
  }
</style>
