import Vue from 'vue'
import loadingComponent from '@/components/loading.vue'

const LoadingEx = Vue.extend(loadingComponent)

const instance = new LoadingEx({
  el: document.createElement('div')
})

instance.show = false
const loading = {
  show () {
    instance.show = true
    document.body.appendChild(instance.$el)
  },
  hide () {
    instance.show = false
  }
}

export default {
  install () {
    // Vue.$loading = loading
    Vue.mixin({
      created () {
        this.$loading = loading
      }
    })
  }

}
