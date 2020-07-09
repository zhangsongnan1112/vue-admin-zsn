<template>
  <div class="tags-view">11</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    visitedViews () {
      return this.$store.state.tags.visitedViews
    }
  }
}
</script>
<style lang="scss" scoped>
.tags-view {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);

}
</style>
