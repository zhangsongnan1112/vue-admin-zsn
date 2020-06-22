<template>
  <div v-if="!item.hidden">
    <el-menu-item :index="item.path">
      <i class="el-icon-setting"></i>
      <span slot="title">{{item.meta.title}}</span>
    </el-menu-item>
  </div>
</template>
<script>
export default {
  name: 'sideItem',

  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>
