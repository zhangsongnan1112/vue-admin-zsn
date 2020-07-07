<template>
  <div class="app-wrapper" :class="classObj">
    <Sidebar></Sidebar>
    <div class="main-container">
      <NavBar/>
     <app-main />

     <RightPanel v-if="showSettings">
        <Settings />
     </RightPanel>
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
      showSettings: state => state.settings.showSettings
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
