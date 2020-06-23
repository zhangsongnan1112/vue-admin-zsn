<template>
  <div class="sidebar-container">
    <el-menu
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
    console.log(this.permission_routes)
  },
  computed: {
    ...mapGetters([
      'permission_routes'
    ]),
    variables () {
      return variables
    }
  }
}
</script>
