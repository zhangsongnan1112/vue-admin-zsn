<template>
  <div>
    <h2>组件 $on 监听 : {{ title }}</h2>
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
      this.title = target
    })
  }
}
</script>

<style></style>
