<template>
  <div>
    <h2>{{ title }}组件 $emit 抛出</h2>
    <el-button @click="handleclick">child2 $emit</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'child2'
    }
  },
  methods: {
    handleclick() {
      this.$eventBus.$emit('getTarget', this.title)
    }
  }
}
</script>

<style></style>
