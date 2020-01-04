<template>
  <div id="app">
    <NavigationBar/>
    <router-view />
  </div>
</template>

<script lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  components: {
    NavigationBar
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Poppins", sans-serif;
  background-image: linear-gradient(to bottom right, #888888, #BEBEBE);
}
</style>
