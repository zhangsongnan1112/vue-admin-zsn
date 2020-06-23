<template>
  <div class="app-wrapper ">
    <Sidebar></Sidebar>
    <div class="main-container">
     <app-main />
    </div>
  </div>
</template>
<script>
import {Sidebar, TagsView, AppMain} from './components'
export default {
  data () {
    return {

    }
  },
  components: {
    Sidebar,
    TagsView,
    AppMain
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
