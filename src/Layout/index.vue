<template>
  <div class="app-wrapper" :class="classObj">
    <Sidebar></Sidebar>
    <div class="main-container">
      <NavBar/>
     <app-main />
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {Sidebar, TagsView, AppMain, NavBar} from './components'
export default {
  name: 'Layout',
  data () {
    return {

    }
  },
  components: {
    NavBar,
    Sidebar,
    TagsView,
    AppMain
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar
    }),
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened
      }
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
@import "~@/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
