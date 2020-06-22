<template>
  <div class="app-wrapper ">
    <Sidebar></Sidebar>
  </div>
</template>
<script>
import {Sidebar, TagsView} from './components'
export default {
  data () {
    return {

    }
  },
  components: {
    Sidebar,
    TagsView
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
