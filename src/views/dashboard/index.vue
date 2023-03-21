<template>
  <div>
    <!-- {{ obj }}
    <button @click="change">11</button>
    <el-button @click="change1">11</el-button> -->
    <el-date-picker
      v-model="searchWeek"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="选择周"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      obj: {
        a: 'a'
      },
      searchWeek: '',
      weekDateOption: {
        firstDayOfWeek: 1,
        disabledDate(time) {
          const startTime = new Date('2019-12-30').getTime()
          const today = new Date()
          const d = today.getDay()
          let w = 0
          if (d === 0) {
            w = 7
          } else {
            w = d
          }
          const endTime = today.setDate(today.getDate() - w)
          return time.getTime() > endTime || time.getTime() < startTime
        }
      }
    }
  },
  methods: {
    change() {
      this.obj.a = 1
      console.log(this.obj)
    },
    change1() {
      // this.obj.b = 2
      console.log(this.obj)
    }
  }
}
</script>

<style></style>
