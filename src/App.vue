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
// 全局自定义的css样式
body,html{height:100%;padding: 0;margin: 0;}
#app {height: 100%;
  font-family: Helvetica, sans-serif;
  text-align: left;
  >div{
    height: 100%;
  }
}
</style>
