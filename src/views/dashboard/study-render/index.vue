<script>
import jsxRender from './jsx -rednder.vue'
export default {
  components: {
    jsxRender
  },
  data() {
    return {
      age: 1
    }
  },
  render(h) {
    return h(
      'div',
      {
        class: {
          btn: true,
          success: this.value === '11'
        },
        style: {
          color: 'red'
        }
      },
      [
        h('h1', 'study - render'),
        h(
          'button',
          {
            on: {
              click: this.increment
            }
          },
          '按钮加1'
        ),
        h('p', this.age),
        h(jsxRender)
      ]
    )
  },
  methods: {
    increment() {
      this.age++
    }
  }
}
</script>

<style></style>
