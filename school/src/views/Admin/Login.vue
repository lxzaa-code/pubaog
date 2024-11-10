<template>
  <!----->
  <div class="user_panel mar">
    <n-form :rules="rules" :model="admin" ref="formRef">
    <n-card title="登录">
      <User_png />
      <br>
      <!---->
        <n-form-item path="account" label="账号">
          <n-input v-model:value="admin.account" placeholder="请输入账号" />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input v-model:value="admin.password" type="password" placeholder="请输入密码" />
        </n-form-item>
      <template #footer>
        <n-checkbox v-model:checked="admin.rember" label="记住我" />
        <n-button @click="login">登录</n-button>
      </template>
    </n-card>
  </n-form>
  </div>
  <!---->
</template>

<script setup>
import User_png from "@/views/src/User_png.vue";
import { ref, reactive, inject } from 'vue'
import { useCounterStore } from "@/stores/counter.js" ;

import {useMessage} from "naive-ui";
import router from "@/router";
const message = useMessage()
const axios = inject("axios")
const adminStore = useCounterStore()

/**验证表单规则 */
let rules = {
  account: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 3, max: 12, message: "账号长度在 3 到 12 个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 18, message: "密码长度在 6 到 18 个字符", trigger: "blur" },
  ],
};
const formRef = ref(null)
const loginCheck = async () => {
  try {
    await formRef.value.validate();
    console.log("提交中");
  } catch (error) {
    message.error("未满足条件");
  }
}
/**管理员登录数据 */
const admin = reactive({
  account: localStorage.getItem("account") || "",
  password: localStorage.getItem("password") || "",
  rember: localStorage.getItem("rember") == 1 || false
})

/**登录 */
const login = async () => {
  loginCheck()
  let result = await axios.post("/admin/login", {
    "account": admin.account,
    "password": admin.password
  });
  console.log(result)
  if (result.data.code == 200) {
    adminStore.token = result.data.data.token
    adminStore.account = result.data.data.account
    adminStore.id = result.data.data.id

    if (admin.rember) {
      localStorage.setItem("account", admin.account)
      localStorage.setItem("password", admin.password)
      localStorage.setItem("rember", admin.rember ? 1 : 0)
    }
    router.push("/admin")
    message.info("登录成功")
  } else {
    message.error("登录失败")
  }

}

</script>

<style lang="css" scoped>
.user_panel {
  width: 500px;
}
.mar {
  margin: 0 auto;
  margin-top: 130px;
}
</style>