<template>
    <n-config-provider :theme="darkTheme">
      <div class="container">
        <div class="content">
          <n-result
            status="404"
            title="404 Not Found"
            description="对不起，你访问的目录为空目录"
          >
            <template #icon>
              <n-icon size="128" class="ghost-icon">
                <ghost-icon />
              </n-icon>
            </template>
          </n-result>
          
          <n-button type="primary" size="large" @click="goHome">
            回到首页
          </n-button>
        </div>
      </div>
    </n-config-provider>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const goHome = () => {
    router.push('/')
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 1rem;
  }
  
  .content {
    text-align: center;
  }
  
  .ghost-icon {
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .5; }
  }
  </style>