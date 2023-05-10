<template>
  <div>
    <h3>自定义v-model</h3>
    <div>{{ value }}</div>
    <el-input v-model="value"></el-input>
    <myInput :value="value" @input="onChange"></myInput>
  </div>
</template>

<script>
import myInput from './my-input.vue'
export default {
  components: {
    myInput
  },
  data() {
    return {
      value: '11'
    }
  },
  methods: {
    onChange(v) {
      this.value = v
    }
  }
}
</script>

<style></style>
