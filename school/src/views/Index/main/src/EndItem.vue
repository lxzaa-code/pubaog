<template>
  <div class="join-us-container">
    <h1 class="join-us-title">你想加入我们吗？</h1>
    <p class="join-us-description">加入我们的团队，一起创造未来！</p>
    <button class="join-us-button" @click="join">立即加入</button>
  </div>
</template>

<script setup>
import router from '@/router';

const join = () => {
  router.push('/join')
}
</script>

<style scoped>
.join-us-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}

.join-us-title {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 0.5em;
}

.join-us-description {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 1.5em;
}

.join-us-button {
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #00796b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.join-us-button:hover {
  background-color: #0056b3;
}
</style>