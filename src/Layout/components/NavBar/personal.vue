<template>
  <div class="avatar-container">
    <el-dropdown>
      <span class="el-dropdown-link">
        <img :src="avattar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'avattar'
    ])
  }
}
</script>
<style lang="scss" scoped>
.avatar-container {
  margin-right: 30px;
  .el-dropdown {
    padding-top: 5px;
  }
  .el-icon-caret-bottom {
    cursor: pointer;
  }
  .user-avatar {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
}
</style>
