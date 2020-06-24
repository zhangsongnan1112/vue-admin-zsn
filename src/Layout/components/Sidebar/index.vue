<template>
  <div class="sidebar-container">
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
  </div>
</template>
<script>
import variables from '@/styles/variables.scss'
import { mapGetters } from 'vuex'
import Sidebar from './SideItem'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    Sidebar
  },
  created () {

  },
  computed: {
    ...mapGetters([
      'permission_routes'
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
    }
  }
}
</script>
