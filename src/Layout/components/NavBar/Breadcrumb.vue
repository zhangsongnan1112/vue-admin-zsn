<template>
    <el-breadcrumb class="breadcrumb-list" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item+index">
          <span v-if="isSpan(item)" class="no-redirect">{{ item.meta.title }}</span>
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
</template>
<script>
export default {
  data () {
    return {
      levelList: []
    }
  },
  created () {
    this.getBreadcrumb()
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)

      if (!this.isfirst(matched[0])) {
        matched = [{path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
      } else {
        matched = [{path: '/dashboard', meta: { title: 'Dashboard' }}]
      }
      this.levelList = matched.filter(item => item.meta && item.meta.title)
    },
    isSpan (route) {
      const { path } = this.$route
      return !!(route.path === path || route.redirect === path)
    },
    isfirst (route) {
      const title = route && route.meta.title
      if (!title) {
        return false
      }
      return title.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    handleLink (item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
.breadcrumb-list {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .el-breadcrumb__inner a {
    font-weight: 400 !important;
  }
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
