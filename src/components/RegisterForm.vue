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
        @click="handleSendCode()"
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
import { getCurrentInstance } from 'vue'
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
    // 触发注册登录
    const handleRegister = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          axios({
            method: 'POST',
            url: 'http://localhost:9901/user/login',
            data: props.registerUser
          }).then((res:any) => {
            console.log('success')
            console.log(res)
            router.push('/console/index')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    // 触发验证码
    const handleSendCode = () => {
      axios({
        method: 'POST',
        url: 'http://localhost:9901/user/code',
        data: props.registerUser
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
