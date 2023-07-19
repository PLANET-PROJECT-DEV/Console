<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item
      label="邮箱"
      prop="email"
    >
      <el-input
        v-model="loginUser.email"
        placeholder="请输入邮箱..."
      />
    </el-form-item>
    <el-form-item
      label="密码"
      prop="password"
    >
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="请输入密码..."
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit_btn"
        @click="handleLogin('loginForm')"
      >
        登录
      </el-button>
    </el-form-item>
    <div class="tipareaLeft">
      <p><a href="">验证码登录</a></p>
    </div>
    <div class="tiparea">
      <p><a href="">忘记密码？</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  props: {
    loginUser: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    }
  },
  setup (props:any) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { ctx } = getCurrentInstance()
    const router = useRouter()
    // 触发登录方法
    const handleLogin = (formName:string) => {
      ctx.$refs[formName].validate((valid:boolean) => {
        if (valid) {
          console.log(props.loginUser)
          axios({
            method: 'POST',
            url: 'http://localhost:8009/user/loginWithPassword',
            data: props.loginUser
          }).then((res:any) => {
            console.log('success')
            router.push('/')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    return { handleLogin }
  }
}
</script>

<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
  box-shadow: 0 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tipareaLeft {
  position: relative;
  left: 100px;
  top: 10px;
  font-size: 12px;
  color: #333;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a , .tipareaLeft p a {
  text-align: right;
  text-decoration: none;
  color: #409eff;
}
</style>
