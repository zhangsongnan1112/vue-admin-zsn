<template>
  <div class="navbar">
    <btn @toggleClick="togglSideBar" :is-active="Boolean(sidebar.opened)"></btn>
  </div>
</template>
<script>
import btn from './ItemBtn'
import {mapGetters} from 'vuex'
export default {
  components: {
    btn
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
</style>
