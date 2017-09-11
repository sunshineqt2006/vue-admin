<template>
  <div class='tabs-view-container'>
    <router-link class="tabs-view" v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.path">
      <span :class="isActive(tag.path)?'primary':''">
        {{tag.name}}<i @click="closeViewTabs(tag,$event)">×</i>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    visitedViews() {
      return this.$store.state.app.visitedViews.slice(-6)
    }
  },
  methods: {
    closeViewTabs(view, $event) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view.path)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
      $event.preventDefault()
    },
    generateRoute() {
      if (this.$route.matched[this.$route.matched.length - 1].name) {
        return this.$route.matched[this.$route.matched.length - 1]
      }
      this.$route.matched[0].path = '/'
      return this.$route.matched[0]
    },
    addViewTabs() {
      this.$store.dispatch('addVisitedViews', this.generateRoute())
    },
    isActive(path) {
      return path === this.$route.path
    }
  },
  watch: {
    $route() {
      this.addViewTabs()
    }
  }
}
</script>

<style lang="less" scoped>
.tabs-view-container {
  display: block;
  border-bottom: 1px solid #ddd;
  height: 40px;
  .tabs-view {
    margin-left: 10px;
    height: 35px;
    display: inline-block;
    span {
      height: 35px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      margin-top: 4px;
      i{
        font-size: 20px;color: #999;margin-left: 5px;display: none;
      }
      &.primary{
        border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border:1px solid #ddd;
      border-bottom: 1px solid #fff;
      i{display: inline-block;}
      }
    }
  }
}
</style>
