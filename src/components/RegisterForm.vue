<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item
      label="邮箱"
      prop="email"
    >
      <el-input
        v-model="registerUser.email"
        placeholder="请输入邮箱..."
      />
    </el-form-item>
    <el-form-item
      label="验证码"
      prop="code"
    >
      <el-input
        v-model="registerUser.code"
        placeholder="请输入验证码..."
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit_btn"
        @click="handleSendCode('registerForm')"
      >
        发送
      </el-button>
      <el-button
        type="primary"
        class="submit_btn"
        @click="handleRegister('registerForm')"
      >
        注册
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { getCurrentInstance, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
export default {
  props: {
    registerUser: {
      type: Object,
      required: true
    },
    registerRules: {
      type: Object,
      required: true
    }
  },
  setup (props:any) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { ctx } = getCurrentInstance()
    // 触发注册
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleRegister = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    // 触发验证码
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleSendCode = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          axios({
            method: 'POST',
            url: 'http://localhost:8009/user/loginWithPassword',
            data: props.registerUser
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
    return { handleRegister, handleSendCode }
  }
}</script>

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
