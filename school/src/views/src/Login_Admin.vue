<template>

    <!---->
    <div class="user mar">
        <n-switch v-model:value="isLogin">
      <template #checked>
        登录
      </template>
      <template #unchecked>
        注册
      </template>
    </n-switch>
</div>
    <!---->
    <div v-show="isLogin">
<!----->
<div class="user_panel mar">
    <n-card title="登录">
        <User_png />
        <br>
        <!---->
            <n-form :rules="rules" :model="admin">
                <n-form-item path="account" label="账号">
                    <n-input v-model:value="admin.account" placeholder="请输入账号" />
                </n-form-item>
                <n-form-item path="password" label="密码">
                    <n-input v-model:value="admin.password" type="password" placeholder="请输入密码" />
                </n-form-item>
            </n-form>
            <template #footer>
                <n-checkbox v-model:checked="admin.rember" label="记住我" />
                <n-button>登录</n-button>
            </template>
        </n-card>
</div>
<!---->
    </div>
    <div v-show="!isLogin">
<!----->
<div class="user_panel mar">
    <!---->
    <n-card title="注册">
        <User_png />
        <br>
            <n-form :rules="rules" :model="admin_reg">
                <n-form-item path="account" label="账号">
                    <n-input v-model:value="admin_reg.account" placeholder="请输入账号" />
                </n-form-item>
                <n-form-item path="password" label="密码">
                    <n-input v-model:value="admin_reg.password" type="password" placeholder="请输入密码" />
                </n-form-item>
            </n-form>
            <template #footer>
                <n-button @click="register">注册</n-button>
            </template>
        </n-card>
</div>
<!---->
    </div>
  </template>
  
  <script setup>
import { ref, reactive  } from 'vue';
import User_png from './User_png.vue';

  const isLogin = ref(true);
const admin_reg = reactive({
    account: localStorage.getItem("account") || "",
    password: localStorage.getItem("password") || "",
})
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

/*登录数据 */
const admin = reactive({
    account: localStorage.getItem("account") || "",
    password: localStorage.getItem("password") || "",
    rember: localStorage.getItem("rember") == 1 || false
})

/********注册******** */
const register = () => {

}
  </script>

<style scoped>
.user {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.user_panel {
    width: 500px;
}
.mar {
    margin: 0 auto;
    margin-top: 130px;
}
</style>