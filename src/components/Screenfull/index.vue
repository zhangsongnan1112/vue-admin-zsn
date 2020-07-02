<template>
  <div>
     <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'"  @click="toggleFull"/>
  </div>
</template>
<script>
import screenfull from 'screenfull'
export default {
  name: 'screenfull',
  data () {
    return {
      isFullscreen: false
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    toggleFull () {
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
      this.$nextTick(() => {
        this.isFullscreen = !screenfull.isFullscreen
      })
    },
    change () {
      this.isFullscreen = screenfull.isFullscreen
    },
    init () {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy () {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>
