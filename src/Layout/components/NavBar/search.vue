<template>
  <div :class="{'show':show,'header-search':true}" >
    <svg-icon class-name="search-icon" icon-class="search" @click.stop="click" />
     <el-select
      ref="headerSearchSelect"
      v-model="value"
      :remote-method="querySearch"
      placeholder="Search"
      filterable
      remote
      class="header-search-select"
      @change="change">
      <el-option v-for="item in options" :key="item.path" :value="item" :label="item.title.join('>')" />
  </el-select>
  </div>
</template>
<script>
import Fuse from 'fuse.js/dist/fuse'
import path from 'path'
export default {
  name: 'HeaderSearch',
  data () {
    return {
      value: '',
      options: [],
      show: false,
      fuse: undefined
    }
  },
  computed: {
    routes () {
      return this.$store.getters.permission_routes
    }
  },
  created () {
    console.log(this.generateRoutes(this.routes))
    this.init(this.generateRoutes(this.routes))
  },
  watch: {
    show (value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    }
  },
  methods: {
    init (list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [{
          name: 'title',
          weight: 0.7
        }, {
          name: 'path',
          weight: 0.3
        }]
      })
    },
    click () {
      this.show = !this.show
      this.options = []
      if (this.show) {
        this.$refs.headerSearchSelect.focus()
      }
    },
    close () {
      this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.blur()
      this.options = []
      this.show = false
    },
    generateRoutes (routes, baseUrl = '/', prefixTitle = []) {
      let res = []
      for (const router of routes) {
        if (router.hidden) { continue }

        const data = {
          path: path.resolve(baseUrl, router.path),
          title: [...prefixTitle]
        }
        if (router.meta && router.meta.title) {
          data.title = [...data.title, router.meta.title]
          res.push(data)
        }
        if (router.children) {
          const tempRoutes = this.generateRoutes(router.children, data.path, data.title)
          if (tempRoutes.length >= 1) {
            res = [...res, ...tempRoutes]
          }
        }
      }
      return res
    },
    querySearch (query) {
      if (query !== '') {
        this.options = this.fuse.search(query)
      } else {
        this.options = []
      }
    },
    change (val) {
      this.$router.push(val.path)
      this.value = ''
      this.options = []
      this.$nextTick(() => {
        this.show = false
      })
    }

  }
}
</script>
<style lang="scss" scoped>
.header-search {
  .header-search-select {
    >>> .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
    font-size: 18px;
    transition: width 0.2s;
    width: 0px;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}

</style>
