<template>
    <div class="team-intro">
      <h1 class="title">我们的团队</h1>
      <div class="members">
          <div
            class="member"
            v-for="member in teamMembers"
            :key="member.id"
            @mouseenter="hoveredMember = member.id"
            @mouseleave="hoveredMember = null"
            :class="{ 'hovered': hoveredMember === member.id }"
          >
            <div class="member-content">
              <h2>{{ member.name }}</h2>
              <p>{{ member.role }}</p>
            </div>
          </div>

      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface TeamMember {
    id: number;
    name: string;
    role: string;
  }
  
  const teamMembers: TeamMember[] = [
    { id: 1, name: 'lxz', role: '全栈开发' },
    { id: 2, name: 'str', role: '设计师' },
    { id: 4, name: 'pzs', role: '美术' },
  ];
  
  const hoveredMember = ref<number | null>(null);
  </script>
  
  <style scoped>
  .team-intro {
    text-align: center;
    padding: 60px;
    background: radial-gradient(circle, #e2e8f0 30%, #f3f4f6 90%);
    border-radius: 25px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
    max-width: 1200px;
    margin: auto;
    animation: fadeIn 1s ease forwards;
  }
  
  .title {
    font-size: 3em;
    margin-bottom: 40px;
    color: #00796b;
    animation: slideIn 0.6s ease forwards;
  }
  .member {
    position: relative;
    width: 300px;
    padding: 20px;
    border: 2px solid #3b82f6;
    border-radius: 20px;
    background-color: #fff;
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
/** 竖排
  .members {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
  }
     */

     /**横排 */
  .members {
    display: flex;

    align-items: center; 
  flex-direction: row; 
  gap: 40px;
  flex-wrap: wrap;
}
  .member-content {
    text-align: center;
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }
  
  
  h2 {
    font-size: 3em;
    margin: 15px 0;
    color: #3b82f6;
    transition: color 0.3s ease;
  }
  
  p {
    color: #4b5563;
    font-size: 2em;
    margin: 15px 0;
  }
  
  .hovered {
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  }
  
  .hovered {
    transform: scale(1.1);
    filter: brightness(1.1);
  }
  
  @keyframes slideIn {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  