<template>
  <div>
    <uL>
      <li v-for="list in arrList" :key="list">{{list}}</li>
    </uL>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api'
export default {
  name:'target-monitor',
  setup(props, ctx) {
    const arrList = ref([])
    arrList.value = [1]
    return {arrList}
  }
}
</script>

<style>

</style>