<script>
export default {
  data() {
    return {
      name: 1,
      courierCategoryList: [
        {
          label: '稳定运力',
          value: '1'
        },
        {
          label: '次稳定运力',
          value: '2'
        },
        {
          label: '中部运力',
          value: '3'
        },
        {
          label: '不稳定运力',
          value: '4'
        }
      ]
    }
  },

  // jsx 的render
  render() {
    return (
      <div>
        <h1>study - jsx - render</h1>
        {this.courierCategoryList.map(item => {
          return (
            <div>
              <button onClick={this.handleAdd.bind(this, item.value)}>
                {item.label}
              </button>
              <span>{item.value}</span>
            </div>
          )
        })}
      </div>
    )
  },
  methods: {
    handleAdd(value) {
      console.log(value)
    }
  }
}
</script>

<style></style>
