<template>
  <div class="user_panel mar">
    <n-form :rules="rules" :model="admin" ref="formRef">
      <n-card title="加入我们！">
        <n-form-item path="content" label="你会什么">
          <n-input v-model:value="admin.content" placeholder="请输入……" />
        </n-form-item>
        <n-form-item path="age" label="年龄">
          <n-input v-model:value="admin.age" placeholder="请输入……" />
        </n-form-item>
        <n-form-item path="phone" label="联系方式">
          <n-input v-model:value="admin.phone" placeholder="QQ，WX，电话……" />
        </n-form-item>
        <template #footer>
          <n-button @click="handleSubmit">来吧！兄弟！</n-button>
        </template>
      </n-card>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
import { useCounterStore } from "@/stores/counter.js";

import { useMessage } from "naive-ui";
import router from "@/router";
const message = useMessage()
const axios = inject('axios')
const adminStore = useCounterStore()

/**验证表单规则 */
let rules = {
  content: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 3, max: 12, message: "账号长度在 3 到 12 个字符", trigger: "blur" },
  ],
  age: [
    { required: true, message: "请输入年龄", trigger: "blur" },
    { min: 1, max: 2, message: "年龄长度在 1 到 2 个字符", trigger: "blur" },
  ],
  phone: [
    { required: true, message: "请输入联系方式", trigger: "blur" },
    { min: 2, max: 40, message: "联系方式长度在 2 到 40 个字符", trigger: "blur" },
  ]
};

/**数据 */
const admin = reactive({
  content: "",
  age: "",
  phone: "",
})

/**表单引用 */
const formRef = ref(null);

/**加入 */
const login = async () => {
  try {
    await formRef.value.validate();
    message.success("成功验证")
  } catch (error) {
    message.error("未满足条件");
  }
}

const handleSubmit = async () => {
  login();
  try {
    const res = await axios.post("join/add", admin)
    if (res.data.code === 200) {
      message.success("提交成功")
    }
  } catch (error) {
    console.error("提交失败")
  }
}
</script>

<style lang="css" scoped>
.user_panel {
  width: 500px;
}
.mar {
  margin: 0 auto;
  margin-top: 40px;
}
</style>