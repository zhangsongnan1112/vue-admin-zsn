<template>
  <div class="dashboard-container">
    <div class="dashboard-item">
      <h2>练习 eventBus $on $emit</h2>
      <child1></child1>
      <child2></child2>
    </div>
    <div class="dashboard-item">
      <study-model></study-model>
    </div>
    <div class="dashboard-item">
      <study-render></study-render>
    </div>
    <div class="dashboard-item"></div>
  </div>
</template>

<script>
import child1 from './study-event-bus/child1.vue'
import child2 from './study-event-bus/child2.vue'
import studyModel from './study-model/index.vue'
import studyRender from './study-render'
export default {
  name: 'dashboard',
  components: {
    child1,
    child2,
    studyModel,
    studyRender
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.dashboard-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .dashboard-item {
    width: 33%;
    height: 300px;
    border: 2px solid red;
  }
}
</style>
