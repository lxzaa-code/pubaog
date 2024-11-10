<template>
    <div class="tabs-container">
      <div class="tabs">
        <div 
          v-for="tab in tabs" 
          :key="tab.name" 
          class="tab" 
          :class="{ active: currentTab === tab.name }" 
          @click="navigateTo(tab.router)"
        >
          {{ tab.tab }}
        </div>
        <div class="right_tab">
          <div class="tab" v-for="tab in right" @click="navigateTo(tab.router)">{{ tab.tab }}</div>
          <!--          {{ right_msg }}-->
        </div>
      </div>
      <router-view />
    </div>
</template>

<script setup>
import lyb from "./lyb/Index.vue"
import Main from './main/Index.vue';
import BBS from './bbs/Index.vue';
import Join from "./join/Index.vue"
import { currentSeasonMessage } from "../../hooks/inmes"
const c = "杭州市富阳区炫泽中学 | Hangzhou Fuyang Xuanze Middle School"
const right_msg = ""

import { useMessage } from "naive-ui";
import { onMounted, ref, computed, watch } from "vue";
import router from "@/router";
const message = useMessage()
const navigateTo = (rout) => {
  router.push(rout)
}
const tabs = [
{ name: 'index', tab: '主页',router:"/" },
{ name: "von", tab: "加入我们", router:"/join" },
{ name: 'lyb', tab: '留言板',router:"/lyb" },
// { name: 'BBS', tab: 'BBS',router:"/bbs" }
];
const right = [
  { name: "im", tab: "我是谁", router: "/im" }
]
onMounted(() => {
currentSeasonMessage();
})

</script>

<style scoped>
.taper-line {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(rgba(0, 0, 0, .4), transparent);
    pointer-events: none;
}
.tabs-container {
display: flex;
flex-direction: column;
}

.tabs {
display: flex;
border-bottom: 2px solid #007bff;
}

.tab {
padding: 10px 20px;
cursor: pointer;
transition: background 0.3s;
}
.right_tab {
  padding: 10px 20px;
  margin-left: auto;
}
.tab.active {
background-color: #007bff;
color: white;
}

.tab:hover {
background-color: rgba(0, 123, 255, 0.1);
}
/**



.footer {
margin-top: 20px;
font-size: 17.5px;
text-align: center;
} */
</style>