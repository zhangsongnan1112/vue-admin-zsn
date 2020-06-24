<template>
   <div>
      <p>foo:{{$attrs.foo}}</p>
      <childDomChild v-bind="$attrs" v-on="$listeners"></childDomChild>
   </div>
</template>
<script>
import childDomChild from './childDomChild'
export default {
  name: 'child-dom',
  components: {childDomChild}

}
</script>
