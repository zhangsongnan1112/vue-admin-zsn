<template>
  <div :class="drawer? 'showSettings':''">
    <div class="handle-button"  @click="drawer=!drawer" >
      <i :class="drawer?'el-icon-close':'el-icon-setting'" />
    </div>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      class="pick-box"
      size='300px'>
      <slot />
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: 'RightPanel',
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss" scoped>
.handle-button {
  width: 48px;
  height: 48px;
  position: fixed;
  top:50%;
  right: 0;
  text-align: center;
  font-size: 24px;
  border-radius: 6px 0 0 6px !important;
  z-index: 9999;
  pointer-events: auto;
  cursor: pointer;
  color: #fff;
  line-height: 48px;
  background: fuchsia;
  i {
    font-size: 24px;
    line-height: 48px;
  }
}
.showSettings {
  .handle-button {
    right: 300px;
    transition: .3s;
  }
}
.pick-box >>> .el-drawer{
 &:focus {
   outline-width: 0;
 }

}
</style>
