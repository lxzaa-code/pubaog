<template>
  <h2 class="title">留言板</h2>
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

  <div class="message-board">
    <div class="input-group">
      <n-input v-model:value="msg.newname" placeholder="你的名字" class="message-input" />
      <br />
      <n-input v-model:value="msg.newclass" placeholder="你的班级" class="message-input" />
      <br />
      <n-input v-model:value="msg.newmessage" placeholder="输入你的留言..." class="message-input" />
      <br />
      <n-button :disabled="isCooldown || !(msg.newclass && msg.newmessage && msg.newname)" @click="addMessage"
        type="primary" class="send-button">
        发送留言
      </n-button>
      <div v-if="isCooldown" class="st">{{ cooldownTime }}s</div>
    </div>
  </div>
</template>

<script setup>
import { useMessage } from 'naive-ui';
import { ref, reactive, inject, onUnmounted, onMounted, computed } from 'vue';
const axios = inject('axios');

const message = useMessage();
const cards = ref([]);
const msg = reactive({
  newmessage: '',
  newclass: '',
  newname: '',
  timestamp: 0,
});

const isCooldown = ref(false);
const cooldownTime = ref(5);

function parseTimestamp(timestamp) {
  if (!timestamp) {
    return '无效的时间戳';
  }

  const date = new Date(timestamp * 1000);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
const resmsg = () => {
  msg.newmessage = '';
  msg.newclass = '';
  msg.newname = '';
  msg.timestamp = 0;
}

const getlist = async () => {
  try {
    const res = await axios.get("/lyb/list");
    if (res.data.code === 200) {
      cards.value = res.data.result.rows.slice(0, 10)

      message.success("成功查询");
    } else {
      message.error("查询失败");
    }
  } catch (error) {
    message.error("查询失败");
    console.error(error);
  }
}

const addMessage = async () => {
  const timestamp = (new Date().getTime() / 1000)
  msg.timestamp = parseTimestamp(timestamp)
  try {
    if (!isCooldown.value && msg.newclass && msg.newmessage && msg.newname && msg.timestamp) {

      axios.post("/lyb/add", msg)
        .then(res => {
          if (res.data.code === 200) {
            getlist()
            message.success("成功添加");
          } else {
            message.error("添加失败");
          }
        })
        .catch(error => {
          message.error("请求失败");
        });


      resmsg()
      startCooldown();
    } else {
      message.error("信息为空或正在冷却中");
    }
  } catch {
    message.error("服务器错误")
  }
};

const startCooldown = () => {
  isCooldown.value = true;
  let interval = setInterval(() => {
    if (cooldownTime.value > 0) {
      cooldownTime.value--;
    } else {
      clearInterval(interval);
      isCooldown.value = false;
      cooldownTime.value = 5;
    }
  }, 1000);
};
onMounted(() => {
  getlist()
})

onUnmounted(() => {
  if (isCooldown.value) {
    clearInterval(interval.value);
  }
});
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.my-card {
  width: 300px;
}

.card-content {
  font-size: large;
  font-weight: 200;
}


.st {
  text-align: center;
}

.message-board {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.input-group {
  display: flex;
  gap: 10px;
}

.message-input {
  flex: 1;
}

.send-button {
  flex-shrink: 0;
}

.message-list {
  margin-top: 20px;
}

.message-item {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 10px;
  margin: 5px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
</style>