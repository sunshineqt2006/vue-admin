<template>
  <div class="login">
    <div class="loginForm">
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="form.pw"></el-input>
        </el-form-item>
        <el-form-item>
           <el-checkbox v-model="checked">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
        
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        phone: 'admin',
        pw: '123456'
      },
      checked:true
    }
  }
}
</script>

<style lang="less" >
@import '../../styles/index.less'; 
.login {
  background: @main-color;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginForm {
    width: 300px;
    padding: 50px 30px;
    height: 200px;
    background: url('../../assets/images/login_bg.png') top repeat-x;
    .el-button{    display: block;width: 100%;}
  }
}
</style>

