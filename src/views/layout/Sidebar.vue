<template>
    <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :collapse="isCollapse">
      <i class="toggle"></i>
      <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
</template>
<style lang="less" scoped>
  .toggle{
    position: absolute;
    top: 50%;
  }
</style>


<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
