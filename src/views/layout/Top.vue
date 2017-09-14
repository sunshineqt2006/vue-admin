<template>
  <div class="top">
    <div class="parent-menus">
      <div class="today">
        <h3 @click="$router.push({path: '/dashboard'})">后台管理系统</h3>
        {{todayFn}}</div>
      <div class="tools">
        <a @click="logout">安全退出</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      today:''
    }
  },
  computed:{
    todayFn(){
      const today = new Date()
      return this.$util.timeFormat(today,"yyyy-MM-dd HH:mm:ss")
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('user/LogOut').then(() => {
        location.reload()// 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~styles/var.less';
.top{
  .parent-menus{background:url('~assets/images/parent_menus_bg.jpg') no-repeat @default-color;height: 64px;display: flex;justify-content: space-between;color: #fff;align-items: center;padding: 0 10px;
    .today{
      h3{display: inline-block;font-family: "微软雅黑";}
    }  
  }
}
</style>
