<template>
      <n-card v-for="item in cards" class="my-card" style="margin-right: 20px;"
        :title="`问卷ID: ${item.id} \n 内容: ${item.content}`">
        <div>
          <strong style="font-size: large;">年龄: </strong>
          <span class="tex">{{ item.age }}</span>
          <br>
          <strong style="font-size: large;">联系方式: </strong>
          <span class="tex">{{ item.phone }}</span>
        </div>
  
        <template #action>
          {{ item.timestamp }}
        </template>
      </n-card>
    </template>
    
  
  
    <script setup>
    import { onMounted, ref } from 'vue';
  
    import axios from 'axios';
  import { useMessage } from 'naive-ui';
  const cards = ref([])
    const message = useMessage()
    const getlist = async () => {
    try {
      const res = await axios.get("/join/list");
      if (res.data.code === 200) {
        cards.value = res.data.rows
  
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
   .card-content {
  font-size: large;
  font-weight: 200;
}
.tex {
    text-align: left;
    font-size: 30px;
}
    </style>