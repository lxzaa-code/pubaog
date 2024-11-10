<template>
  <div class="side-bar">
    <p>你好, {{ local_user }}</p>
    <div class="tabs">
      <div
          v-for="tab in tabs"
          :key="tab.name"
          class="tab"
          :class="{ active: currentTab === tab.name }"
          @click="currentTab = tab.name"
      >
        {{ tab.tab }}
      </div>
    </div>
  </div>
  <div class="content-container">
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import lyb from "./index/message.vue"
import user_all from "./index/user_all.vue"
import join from "./index/join_admin.vue"
import {useMessage} from "naive-ui";
import {onMounted, ref, computed, inject} from "vue";
import { useCounterStore } from "@/stores/counter.js";
import router from "@/router";
const axios = inject("axios")
const ads = useCounterStore()
const message = useMessage()
const local_user = localStorage.getItem("account")
const local_password = localStorage.getItem("password")
onMounted(() => {
  if (ads.token === "" && local_user == null && local_password == null) {
  message.error("你没登录")
  router.push("/admin/login")
}
})

/** 查询token，生产情况下用
 * const gettoken = async () => {
  if (local_user != "" && local_password != "") {
    const res = axios.post("/admin/check", {
    "account": local_user,
    "password": local_password
  })
  if (res.data.code == 200) {
    ads.token = result.data.data.token
  }
  }
}
 */
const admin = "admin"
const tabs = [
  {name: 'lyb', tab: '留言版管理', component: lyb},
  {name: "join" ,tab: "问卷管理", component: join}
];
const adminfor = () => {
  const user = ads.account | local_user | ""
  if (user === admin) {
    tabs.push({
      name: 'user', 
      tab: '用户管理', 
      component: user_all 
    });
  }
}
const currentTab = ref('lyb');
const currentComponent = computed(() => {
  return tabs.find(tab => tab.name === currentTab.value).component;
});

const currentSeasonMessage = () => {
  const date = new Date();
  const month = date.getMonth();
  let seasonMessage = '';
  if (month >= 2 && month <= 4) {
    seasonMessage = '春天啦！，万物复苏！';
  } else if (month >= 5 && month <= 7) {
    seasonMessage = '夏天啦！，阳光明媚！';
  } else if (month >= 8 && month <= 10) {
    seasonMessage = '秋天啦！，果实累累！';
  } else {
    seasonMessage = '冬天啦！，白雪皑皑！';
  }
  message.success(seasonMessage)
};
onMounted(() => {
  currentSeasonMessage();
  adminfor()
})
</script>

<style scoped>
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background: #f4f4f4;
  border-right: 1px solid #ccc;
  z-index: 100;
  overflow-y: auto;
}

.tabs {
  display: flex;
  flex-direction: column;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s;
}

.tab.active {
  background-color: #007bff;
  color: white;
}
p {
  text-align: center;
  font-size: 15px;
}
.tab:hover {
  background-color: rgba(0, 123, 255, 0.1);
}

.content-container {
  margin-left: 200px;
  padding: 20px;
}
</style>