import { ref } from 'vue'

interface User {
  email: string;
  password: string;
}

export const loginUser = ref<User>({
  email: '',
  password: ''
})

interface Rules {
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: ({
    required: boolean;
    message: string;
    trigger: string;
    min?: undefined;
    max?: undefined;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
    required?: undefined;
  })[];
}
export const rules = ref<Rules>({
  email: [{
    type: 'email',
    message: '请输入正确的邮箱！',
    required: true,
    trigger: 'blur'
  }],
  password: [{
    message: '密码不能为空！',
    required: true,
    trigger: 'blur'
  },
  {
    min: 8,
    max: 20,
    message: '密码长度应为8-20位！',
    trigger: 'blur'
  }
  ]
})
