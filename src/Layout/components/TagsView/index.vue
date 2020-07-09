<template>
  <div class="tags-view">
    <router-link
      v-for="tag in visitedViews"
      :key="tag.path"
      :class="isActive(tag)?'active':''"
      :style="isActive(tag)? {'background-color':theme,'border-color':theme}: ''"
      :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
      tag="span"
      class="tags-view-item"
    >
    {{tag.title}}
    <span v-if="!isAffix(tag)" class="el-icon-close" @click.stop="closeedTags(tag)" />
    </router-link>
  </div>
</template>
<script>
import path from 'path'
export default {
  data () {
    return {
      tags: []
    }
  },
  computed: {
    visitedViews () {
      return this.$store.state.tagsView.visitedViews
    },
    routes () {
      return this.$store.state.permission.routers
    },
    theme () {
      return this.$store.state.settings.theme
    }
  },
  mounted () {
    this.initTags()
  },
  methods: {
    isActive (route) {
      return route.path === this.$route.path
    },
    isAffix (tag) {
      return tag.meta && tag.meta.affix
    },
    defaultTags (routes, basePath = '/') {
      let tags = []
      routes.forEach(element => {
        if (element.meta && element.meta.affix) {
          const tagPath = path.resolve(basePath, element.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: element.name,
            meta: {...element.meta}
          })
        }
        if (element.children) {
          const tempTags = this.defaultTags(element.children, element.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    initTags () {
      const defultTags = this.tags = this.defaultTags(this.routes)
      for (let item of defultTags) {
        if (item.name) {
          this.$store.dispatch('tagsView/addVisitedView', item)
        }
      }
      console.log(this.visitedViews)
    },
    addTags () {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tagsView/addVisitedView', this.$route)
      }
      return false
    },
    closeedTags (tag) {
      this.$store.dispatch('tagsView/delVisitedView', tag).then((visitedViews) => {
        if (this.isActive(tag)) {
          this.toLastView(visitedViews, tag)
        }
      })
    },
    toLastView (visitedViews, view) {
      console.log(visitedViews)
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        this.$router.replace({ path: '/' + view.fullPath })
      }
    }
  },
  watch: {
    $route () {
      this.addTags()
    }
  }
}
</script>
<style lang="scss" scoped>
.tags-view {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid  #d8dce5;; ;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: #fff;
      border: 1px solid;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px;
      }
    }
  }
}
.el-icon-close {
  width: 16px;
  height: 16px;
  vertical-align: 2px;
  border-radius: 50%;
  text-align: center;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  transform-origin: 100% 50%;
  &:before {
    transform: scale(.6);
    display: inline-block;
    vertical-align: -3px;
  }
  &:hover {
    background-color: #b4bccc;
    color: #fff;
  }
}
</style>
