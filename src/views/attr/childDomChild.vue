<template>
  <div>
   <p>coo:{{coo}}</p>
   <p>foo:{{foo}}</p>
   <button @click="startUpRocket">我要发射火箭</button>
  </div>
</template>
<script>
export default {
  name: 'childDomChild',
  props: ['coo', 'foo'],
  data () {
    return {
      child: '孙子'
    }
  },
  methods: {
    startUpRocket () {
      this.$emit('commit', this.child)
    }
  }
}
</script>
