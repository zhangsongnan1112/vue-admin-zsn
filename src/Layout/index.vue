<template>
  <div class="app-wrapper" :class="classObj">
    <sidebar />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <nav-bar/>
        <tags-view v-if="tagsView"/>
      </div>
      <app-main/>
     <right-panel v-if="showSettings">
        <Settings/>
     </right-panel>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {Sidebar, TagsView, AppMain, NavBar, Settings} from './components'
import RightPanel from '@/components/RightPanel'
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
    AppMain,
    RightPanel,
    Settings
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      showSettings: state => state.settings.showSettings,
      tagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
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
@import "~@/styles/variables.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: width 0.28s;
  width: calc(100% - #{$sideBarWidth});
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}
</style>
