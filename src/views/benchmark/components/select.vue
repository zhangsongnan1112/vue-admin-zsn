<template>
  <div class="db-env-checkbox">
    <ul class="db-icon-box">
      <li v-for="(item,key) in ['Z','T','H']" :key="key" :class="activeCalss === key ?'active': '' ">
        <span @click="changeChart(item,key)"></span>
      </li>
    </ul>
    <div v-for="(item,key,i) in formData" :key="i" style="float:left">
      <div v-if="item.type == 'select'" class="db-checkbox-beauty">
        <span>{{ item.label }}</span>
        <el-select
          v-model="formData.itemId[key]"
          @change="item.changeEvent"
        >
          <el-option
            v-for="it in item.list"
            :key="it.code"
            :label="it.name"
            :value="it.code"
          />
        </el-select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    formData: {
      type: Object,
      require: true,
      default: () => {}
    },
    activeCalss: {
      type: Number,
      default: 0,
      require: true
    }
  },
  methods: {
    changeChart (item, index) {
      this.$emit('changeChart', item, index)
    }
  }
}
</script>
<style>
.db-env-checkbox {
   margin: 50px 0 34px 0;
   height: 50px;;
}
</style>
