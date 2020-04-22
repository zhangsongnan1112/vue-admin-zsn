<template>
  <div v-show="showPop" class="db-cover">
    <div class="db-popup">
      <i class="db-icon"></i>
      <span class="db-close" @click="closePopup()"></span>
      <p class="db-desc"> {{ title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showPop: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '横向指标为单选，请取消 已选择指标，再次勾选'
    }
  },
  methods: {
    closePopup () {
      this.$emit('closePop')
    }
  }
}
</script>
<style lang="scss" scoped>
  $bgcolor:rgba(20,53,127,.8);
  .db-cover {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,.0);
      z-index: 99;
      .db-popup {
      width:493px;
      height:140px;
      background:$bgcolor;
      border-radius:4px;
      position: fixed;
      top:0;
      left: 0;
      bottom:0;
      right: 0;
      margin: auto;
      }
      .db-icon {
          display: inline-block;
          width: 36px;
          height: 30px;
          background: url('../../../assets/imgs/warning.png') no-repeat;
          background-size: contain;
          position: absolute;
          left: 60px;
          top:0;
          bottom:0;
          margin: auto;
      }
      .db-close {
          display: block;
          width:16px;
          height: 16px;
          cursor: pointer;
          font-size: 16px;
          color: #fff;
          float: right;
          background: url('~@/assets/imgs/close.png') no-repeat;
          background-size: cover;
          margin: {
              top: 10px;
              right: 10px;
          }
      }
      .db-desc {
          width:213px;
          height:47px;
          font-size:18px;
          font-weight:400;
          color:rgba(249,179,68,1);
          line-height:30px;
          margin: 0 auto;
          margin-top: 40px;
          text-align: center;
      }
  }
</style>
