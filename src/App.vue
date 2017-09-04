<template>
  <div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
  export default{
    name: 'APP'
  }
</script>

<style  lang="less">
@import './styles/index.less'; // 全局自定义的css样式
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
