<template>
  <div>
    <h2>$attrs $listeners 练习</h2>
    childName: {{ childName }}
    <child-dom :foo="foo" :coo="coo" @commit="recive"> </child-dom>
  </div>
</template>
<script>
import childDom from './ChildDom.vue'
export default {
  data() {
    return {
      foo: 'FOO',
      coo: 'COO',
      childName: ''
    }
  },
  components: { childDom },
  methods: {
    recive(value) {
      this.childName = value
    }
  }
}
</script>
