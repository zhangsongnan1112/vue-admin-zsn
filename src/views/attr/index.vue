<template>
  <div>
    <h2>$attrs $listeners 练习</h2>
    <child-dom :foo="foo" :coo="coo" @commit="recive"> </child-dom>
  </div>
</template>
<script>
import childDom from './ChildDom.vue'
export default {
  data() {
    return {
      foo: 'Hello, world',
      coo: 'Hello,rui'
    }
  },
  components: { childDom },
  methods: {
    recive(v) {
      alert('我是孙子组建过来的')
    }
  }
}
</script>
