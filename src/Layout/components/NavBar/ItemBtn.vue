<template>
  <div class="icon-btn">
    <i :class='[isActive ? "el-icon-s-fold": "el-icon-s-unfold", "hamburger" ]' @click="toggleClick"></i>
  </div>
</template>
<script>
export default {
  name: 'ItemBtn',
  data () {
    return {

    }
  },
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleClick () {
      this.$emit('toggleClick')
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-btn {
  width:26px;
  height: 50px;;
  padding-left:15px;
  line-height: 50px;
}
.hamburger {
  display: inline-block;
  vertical-align: middle;
  font-size: 24px;
  cursor: pointer;
}
</style>
