<template>
    <div class="app-container">
      <div class="background"></div>
  
      <div class="content">
        <div class="image-wrapper">
          <img src="../../../assets/png/blcx.jpg" alt="菠萝吹雪" class="image" />
        </div>
        <h1 class="heading">{{ title }}</h1>
        <button class="cta-button" @click="handleClick">关于我</button>
      </div>
  
      <div class="particles"></div>
    </div>
  </template>
  
  <script setup>
  import router from '@/router';
import { ref, onMounted } from 'vue';
  import { useTypewriter } from "../../../pla/TypewriterPlugin"

  const title = useTypewriter({
    text: "你好，朋友!欢迎来到我的网页！",
    speed: 400,
    mods:true,
    sleep_time:400
  }).currentText
  
  const handleClick = () => {
    router.push("/im")
  };
  

  </script>
  
  <style scoped>
  .app-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: black;
  }
  
  .background {
    background: url("../../../assets/png/back.jpg") center/cover no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(3px) brightness(0.7);
    animation: backgroundAnimation 30s infinite ease-in-out;
  }
  
  @keyframes backgroundAnimation {
    0% {
      transform: scale(1) translateX(0);
    }
    50% {
      transform: scale(1.1) translateX(-50px);
    }
    100% {
      transform: scale(1) translateX(0);
    }
  }
  .content {
    z-index: 1;
    text-align: center;
    color: #fff;
    animation: fadeIn 2s ease-out;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .heading {
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.7), 0 0 50px rgba(255, 255, 255, 0.5);
    overflow: hidden;
    white-space: nowrap;
  }
  @keyframes glowingText {
    0% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.5);
    }
    50% {
      text-shadow: 0 0 30px rgba(255, 255, 255, 1), 0 0 50px rgba(255, 255, 255, 0.8);
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.5);
    }
  }
  .image-wrapper {
    width: 300px;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    margin: 20px auto;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
    animation: imageScale 20s infinite alternate, imageGlow 1.5s infinite alternate;
    transition: transform 0.3s ease;
  }
  @keyframes imageScale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes imageGlow {
    0% {
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
    }
    50% {
      box-shadow: 0 0 50px rgba(255, 255, 255, 1);
    }
    100% {
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
    }
  }
  
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .image-wrapper:hover .image {
    transform: scale(1.1);
  }
  .cta-button {
    padding: 15px 30px;
    font-size: 1.2rem;
    background: linear-gradient(45deg, #ff6ec7, #ff9a8b);
    border: none;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    margin-top: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    animation: buttonPulse 2s infinite ease-in-out;
  }
  .cta-button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
  }
  @keyframes buttonPulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;
  }
  .particle {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    opacity: 0;
    animation: particleAnimation 4s ease-in-out infinite;
  }
  @keyframes particleAnimation {
    0% {
      opacity: 1;
      transform: translate(0, 0);
    }
    50% {
      opacity: 0.5;
      transform: translate(50px, -50px);
    }
    100% {
      opacity: 0;
      transform: translate(-50px, 50px);
    }
  }
  </style>