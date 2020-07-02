<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
      :default-active="activeMenu"
        mode="vertical"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.$menuActiveText"
      >
        <Sidebar  v-for="item in permission_routes" :key = item.path :item="item" :base-path="item.path"> </Sidebar>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import variables from '@/styles/variables.scss'
import { mapGetters } from 'vuex'
import Sidebar from './SideItem'
export default {
  data () {
    return {
    }
  },
  components: {
    Sidebar
  },
  created () {

  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    variables () {
      return variables
    },
    activeMenu () {
      const route = this.$route
      const {meta, path} = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>
