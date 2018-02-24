<template>
  <div id="app" class="wrapper">
    <main-menu></main-menu>
    <router-view/>
  </div>
</template>

<script>

import MainMenu from './components/menu/MainMenu.vue'

export default {
  name: 'app'
  ,components:{MainMenu}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
