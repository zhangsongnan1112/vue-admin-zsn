<template>
  <div>
   <p>coo:{{coo}}  </p>
   <p>foo:{{foo}}</p>
   <h1>{{child | seat}}</h1>
   <el-input v-model="child" placeholder="请输入内容"></el-input>
   <el-button @click="startUpRocket">我要发射火箭</el-button>
  </div>
</template>
<script>
export default {
  name: 'childDomChild',
  props: ['coo', 'foo'],
  data () {
    return {
      child: ''
    }
  },
  methods: {
    startUpRocket () {
      this.$emit('commit', this.child)
    }
  }
}
</script>
