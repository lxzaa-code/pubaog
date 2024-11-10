<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { NMessageProvider } from 'naive-ui'
const text = "炫泽"
const c = `2024${text}中学. 保留所有权利.`
</script>

<template>
  <n-message-provider>
    <RouterView />
  </n-message-provider>
<hr>
        <div class="footer-content">
          <p>&copy; 我是我</p>
        </div>
</template>

<style scoped>
.footer-content {
  text-align: center;
  padding: 24px;
}
</style>
