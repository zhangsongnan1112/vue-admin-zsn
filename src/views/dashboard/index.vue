<template>
  <div>{{obj}}
    <button @click="change">11</button>
    <button @click="change1">11</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      obj: {
        a: 'a'
      }
    }
  },
  methods: {
    change () {
      this.obj.a = 1
      console.log(this.obj)
    },
    change1 () {
      // this.obj.b = 2
      console.log(this.obj)
    }
  }
}
</script>

<style>

</style>
