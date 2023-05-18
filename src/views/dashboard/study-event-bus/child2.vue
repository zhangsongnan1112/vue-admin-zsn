<template>
  <div>
    <h2>组件 $emit 抛出: {{ title }}</h2>
    <el-button @click="handleclick">child2 $emit</el-button>

    <input type="text" pattern="[A-Za-z0-9]+" />
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
