<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
		<Top class="main-top">top</Top>
		<div class="main-container">
			<sidebar class="sidebar-container"></sidebar>
			<app-main class="app-main"></app-main>
		</div>
	</div>
</template>

<script>
import { Sidebar, AppMain, Top } from './index'

export default {
  name: 'layout',
  components: {
    Sidebar,
		AppMain,
		Top
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
	}
}
</script>
<style lang="less">
.el-menu--dark .el-submenu .el-menu{
				background-color: #2e2f32
			}
</style>

<style lang="less" scoped>
	.app-wrapper {
		position: relative;
		height: 100%;
		width: 100%;
		display: flex;    flex-direction: column;
		.main-top{
			height: 64px;display: block;
		}
		.el-menu--dark{
			background-color: #3c3d43;
		}
		
		&.hideSidebar {
			.sidebar-container{
				width:36px;
				overflow: inherit;
			}
			.main-container {
				margin-left: 36px;
			}
		}
		.sidebar-container {
			transition: width 0.28s ease-out;
			width: 180px;
			height: 100%;
			position: absolute;
			left: 0;
			z-index: 1001;
			overflow-y: auto;
 			&::-webkit-scrollbar {display:none}
		}
		.main-container {
			transition: margin-left 0.28s ease-out;
			    flex-grow: 1;
    flex: 1;
    overflow: hidden;
    position: relative;
			.app-main{
				margin-left:180px;
			}
		}
	}
</style>
