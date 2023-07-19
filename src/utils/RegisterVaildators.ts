import { ref } from 'vue'
interface registerUser{
  email: string;
  code: string;
}
export const registerUser = ref<registerUser>({
  email: '',
  code: ''
})
interface registerRules{
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[]
  code: ({
    message: string;
    required: boolean;
    trigger: string;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
  })[]
}
export const registerRules = ref({
  email: [{
    type: 'email',
    message: '请输入正确的邮箱！',
    required: true,
    trigger: 'blur'
  }],
  code: [{
    message: '请输入验证码！',
    required: true,
    trigger: 'blur'
  },
  {
    min: 6,
    max: 6,
    message: '请输入6位验证码！',
    trigger: 'blur'
  }
  ]
})
