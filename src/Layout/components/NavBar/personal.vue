<template>
  <div class="avatar-container">
    <el-dropdown>
      <span class="el-dropdown-link">
        <img :src="avattar+'?imageView2/1/w/80/h/80'" class="user-avatar">
        <span class="name">{{name}} {{this.$store.state.app.sidebar.opened }} {{typeof (this.$store.state.app.sidebar.opened)  }}</span>
        <i class="el-icon-caret-bottom" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <a v-for="(item,i) in personalItem" :key="i" :href="'/#/user/detail?item='+item">
          <el-dropdown-item>{{ item }}</el-dropdown-item>
        </a>
        <el-dropdown-item divided>
          <span style="display:block;" >退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      personalItem: ['关注企业', '修改密码', '个人信息']
    }
  },
  computed: {
    ...mapGetters([
      'name',
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
    box-sizing: border-box;
  }
  .el-dropdown-link {
    height: 45px;
    display: inline-block;
    box-sizing: border-box;
    .name{
      display: inline-block;
      vertical-align: top;
      font-size: 16px;;
      margin-left:6px;
      font-weight: bold;
    }
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
