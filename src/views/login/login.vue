<template>
  <div class="login-container">
1111111111111
  </div>
</template>
<script>
import {loginApi} from '@/api/common'
export default {
  data () {
    return {

    }
  },
  created () {
    loginApi({user: '1318256345', pwd: '123'}).then(res => {
      console.log(res)
    })
  }
}
</script>

<style  scoped lang="scss">
.login-container {
  height: 100%;
  width: 100%;
  background: url('~@/assets/imgs/bg.png');
  background-size: cover;
  overflow: hidden;
}
</style>
