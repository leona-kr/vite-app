<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/common/Navs.vue'
import Footer from './components/common/Footer.vue';
</script>

<template>
  <Nav />
  <router-view></router-view>
  <div class="flex">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <Footer />
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
