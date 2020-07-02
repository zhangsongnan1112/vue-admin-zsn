<template>
  <div class="navbar">
    <btn @toggleClick="togglSideBar" :is-active="Boolean(sidebar.opened)" class="hamburger-container"></btn>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
  </div>
</template>
<script>
import btn from './ItemBtn'
import Breadcrumb from './Breadcrumb'
import {mapGetters} from 'vuex'
export default {
  components: {
    btn,
    Breadcrumb
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
</style>
