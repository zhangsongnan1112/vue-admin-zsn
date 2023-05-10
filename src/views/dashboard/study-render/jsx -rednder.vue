<script>
export default {
  data() {
    return {
      name: 1
    }
  },

  // jsx 的render
  render() {
    return (
      <div>
        <h1>study jsx render </h1>
        <p>Count:{this.name}</p>
        <button onClick={this.handleAdd}>Increment</button>
      </div>
    )
  },
  methods: {
    handleAdd() {
      this.name++
    }
  }
}
</script>

<style></style>
