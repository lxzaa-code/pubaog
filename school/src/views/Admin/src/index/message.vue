<template>
  <div class="cards-container">
    <n-card v-for="item in cards" class="my-card" style="margin-right: 20px;"
      :title="`姓名: ${item.account} \n 班级: ${item.class}`">
      <div class="card-content">
        <strong>留言: </strong>
        <span><b>{{ item.content }}</b></span>
      </div>

      <template #action>
        {{ item.timestamp }}
      </template>
    </n-card>
  </div>
  </template>
  


  <script setup>
  import { onMounted, ref } from 'vue';

  import axios from 'axios';
import { useMessage } from 'naive-ui';
const cards = ref([])
  const message = useMessage()
  const getlist = async () => {
  try {
    const res = await axios.get("/lyb/list");
    if (res.data.code === 200) {
      cards.value = res.data.result.rows

      message.success("成功查询");
    } else {
      message.error("查询失败");
    }
  } catch (error) {
    message.error("查询失败");
    console.error(error);
  }
}
  
  onMounted(() => {
    getlist();
  });
  </script>
  
  <style scoped>
 
  </style>