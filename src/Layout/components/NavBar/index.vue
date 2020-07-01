<template>
  <div class="navbar">
    <btn @toggleClick="togglSideBar"></btn>
  </div>
</template>
<script>
import btn from './ItemBtn'
export default {
  components: {
    btn
  },
  methods: {
    togglSideBar () {
      alert()
    }
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
</style>
