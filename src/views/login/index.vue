<template>
  <div class="login">
    <div class="loginForm">
      <el-form :model="form" ref="loginForm" :rules="loginRules">
        <el-form-item prop="loginName">
          <input type="text" style="display:none">
          <el-input v-model="form.loginName"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password"></el-input>
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
        loginName: 'admin',
        password: '121212'
      },
      checked: true,
      loginRules: {
        loginName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('user/LoginByUsername', this.form).then(() => {
            this.$router.push({ path: '/' })
          }).catch(() => {
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
    .el-button {
      display: block;
      width: 100%;
    }
  }
}
</style>

