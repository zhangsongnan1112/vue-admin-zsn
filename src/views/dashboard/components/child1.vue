<template>
  <div>
    <h2>{{ title }} 组件 $on 监听</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'child1'
    }
  },

  mounted() {
    this.$eventBus.$on('getTarget', target => {
      console.log(target, 'target')
    })
  }
}
</script>

<style></style>
