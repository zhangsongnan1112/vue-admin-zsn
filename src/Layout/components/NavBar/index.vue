<template>
  <div class="navbar">
    <btn @toggleClick="togglSideBar" :is-active="Boolean(sidebar.opened)" class="hamburger-container"></btn>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="right-menu">
      <search class="right-menu-item"></search>
      <screenfull class="right-menu-item  right-menu-item-hover"></screenfull>
    </div>
  </div>
</template>
<script>
import btn from './ItemBtn'
import Breadcrumb from './Breadcrumb'
import Search from './Search'
import {mapGetters} from 'vuex'
import screenfull from '@/components/screenfull'
export default {
  components: {
    btn,
    Breadcrumb,
    screenfull,
    Search
  },
  created () {

  },
  methods: {
    togglSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background .3s;
  -webkit-tap-highlight-color:transparent;

  &:hover {
    background: rgba(0, 0, 0, .025)
  }
}
.breadcrumb-container {
  float: left;
}
.right-menu {
  float: right;
  height: 100%;
  line-height: 50px;
  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;
  }
  .right-menu-item-hover {
    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
}
</style>
