<template>
   <div>
     <child-dom
      :foo="foo"
      :coo="coo"
      @commit="recive"
     >
     </child-dom>
   </div>
</template>
<script>
import childDom from './ChildDom.vue'
export default {
  data () {
    return {
      foo: 'Hello, world',
      coo: 'Hello,rui'
    }
  },
  components: {childDom},
  methods: {
    recive (v) {
      console.log(v)
    }
  }
}
</script>
