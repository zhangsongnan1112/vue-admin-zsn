import vue from 'vue'

const bus = new vue()

vue.prototype.$eventBus = bus

export default bus