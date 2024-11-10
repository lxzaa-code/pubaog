<template>
  <div class="ax">
    <Title />
  <!--    <Swiper /!-->
      <br>
      <Item />
      <br>
      <EndItem />
    </div>
</template>

<script setup>
import Swiper from "./src/swiper.vue";
import Title from './src/title.vue';
import Item from "./src/item.vue"
import EndItem from "./src/EndItem.vue"
</script>

<style scoped>
  .ax {
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, #e0f7fa, #fce4ec);
  font-family: 'Roboto', sans-serif;
  color: #333;
}
</style>

<script setup lang="ts">
</script>