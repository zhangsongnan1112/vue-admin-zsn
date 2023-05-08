<template>
  <div>
    <h3>子组件</h3>
    <p>foo:{{ $attrs.foo }} ATTR: {{ $attrs }}</p>
    <br />
    <childDomChild v-bind="$attrs" v-on="$listeners"></childDomChild>
  </div>
</template>
<script>
import childDomChild from './childDomChild'
export default {
  name: 'child-dom',
  components: { childDomChild },
  props: {
    // coo: String
  }
}
</script>
