<template>
  <div>
    <h4>孙子组件</h4>
    attrs----{{ $attrs }}
    <el-input v-model="child" placeholder="请输入内容"></el-input>
    <el-button @click="startUpRocket">我要发射火箭</el-button>
  </div>
</template>
<script>
export default {
  name: 'childDomChild',
  data() {
    return {
      child: '我是孙子组件字段'
    }
  },
  methods: {
    startUpRocket() {
      this.$emit('commit', this.child)
    }
  }
}
</script>
