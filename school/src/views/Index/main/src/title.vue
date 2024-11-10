<template>
  <div class="box">
    <!--logo
  <img :src=png alt="logo" class="logo" />
  
  <div class="school-name">中学</div>
  -->
  </div>

  <!--正文-->
  <div class="profile-container" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"
    :style="{ transform: containerTransform }">
    <h1 class="name">{{ howmy }}</h1>
    <header class="profile-header">
      <h1 class="name">{{ name }}</h1>
      <h2 class="title">{{ title }}</h2>
      <h2>一名初一新生，喜欢{{ howlike }}，谢谢关注</h2>
      <div style="font-size: 50px;">👋👋👋👋</div>
    </header>
    <section class="bio" @mouseenter="onBioHover" @mouseleave="onBioLeave">
      <div class="bio-text" v-show="isBioVisible">
        <p>{{ bio }}</p>
      </div>
      <div class="bio-overlay" :class="{ 'show': isBioVisible }"></div>
    </section>
    <section class="skills">
      <h3>技能</h3>
      <ul>
        <li v-for="skill in skills" :key="skill" @mouseenter="onSkillHover(skill) "
          :style="{ transform: skillTransform[skill], transition: 'transform 0.3s ease' }" class="skill-item"
          @click="setskill">
          {{ skill }}
        </li>
      </ul>
    </section>
<!--
        <footer class="footer">
      <button @click="onButtonClick" class="contact-button">联系我</button>
    </footer>
    -->
  </div>
</template>

<script setup lang="ts">
// import png from "@/assets/png/logo.png"
const texat = "炫泽"
import { ref, onMounted, onUnmounted } from 'vue';

import { useTypewriter } from "@/pla/TypewriterPlugin"
import { useMessage } from 'naive-ui';

const setskill = () => {
  message.success("O.O")
}
const message = useMessage()

const howlike = useTypewriter({
  text: " 编程类",
  speed: 250,
  mods: true,
  sleep_time: 1500
}).currentText

const title = useTypewriter({
  text: 'Hello',
  speed: 300,
  mods: false,
}).currentText
const howmy = "我是谁？"
const name = '我是菠萝吹雪的分身';
//'年轻人，去学习吧'
const bio = useTypewriter({
  text: "年轻人，去学习吧",
  speed: 500,
  mods: true,
  sleep_time: 3000
}).currentText
const skills = [
  'Vue3',
  'Express',
  "Typescript",
  "前端三件套",
  '等单词拼写'
];

const containerTransform = ref('scale(1)');
const skillTransform = ref<Record<string, string>>({});
const isBioVisible = ref(false);

const onMouseLeave = () => {
  containerTransform.value = 'scale(1.05) rotate(3deg)';
};

const onMouseEnter = () => {
  containerTransform.value = 'scale(1) rotate(0deg)';
};

const onBioHover = () => {
  isBioVisible.value = true;
};

const onBioLeave = () => {
  isBioVisible.value = false;
};

const onSkillHover = (skill: string) => {
  skillTransform.value[skill] = 'translateY(-10px) scale(1.1)';
  setTimeout(() => {
    skillTransform.value[skill] = 'translateY(0) scale(1)';
  }, 300);
};

const onButtonClick = () => {
  message.success("朋友，你好")
};

onMounted(() => {
  onMouseEnter(),
    onMouseLeave()
})
</script>

<style scoped>
.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.school-name {
  font-size: 20px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  writing-mode: vertical-rl;
}

.box {
  display: flex;
}


.profile-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.95);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.profile-header {
  text-align: center;
  margin-bottom: 40px;
}

.name {
  font-size: 3.5em;
  color: #00796b;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 2em;
  color: #555;
  margin: 10px 0;
  font-weight: bold;
}

.bio {
  position: relative;
  height: 200px;
  overflow: hidden;
  margin-bottom: 40px;
  border-radius: 15px;
  background: rgba(255, 250, 250, 0.9);
  padding: 20px;
  transition: background 0.3s, transform 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.bio-text {
  font-size: 1.4em;
  line-height: 1.6;
  margin-bottom: 20px;
}

.bio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 123, 255, 0.4);
  transition: opacity 0.5s ease;
  opacity: 0;
  pointer-events: none;
}

.bio-overlay.show {
  opacity: 1;
}

.skills {
  margin-bottom: 40px;
}

.skills h3 {
  font-size: 2em;
  color: #00796b;
  margin-bottom: 20px;
  font-weight: bold;
}

.skills ul {
  list-style: none;
  padding: 0;
}

.skill-item {
  background: #b2ebf2;
  margin: 10px 0;
  padding: 15px 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, background 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  font-size: 1.4em;
  cursor: pointer;
  position: relative;
}

.skill-item:hover {
  background: #00796b;
  color: white;
  transform: scale(1.05);
}

.footer {
  text-align: center;
  color: #777;
  font-size: 1.2em;
}

.contact-button {
  padding: 12px 25px;
  font-size: 1.5em;
  color: white;
  background: #00796b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.contact-button:hover {
  background: #004d40;
  transform: scale(1.05);
}

.contact-button:active {
  transform: scale(0.95);
}
</style>
