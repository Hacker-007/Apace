<template>
  <nav>
    <div class="logo">
      <h1>Apace</h1>
    </div>
    <ul class="links">
      <li><router-link to="/">About</router-link></li>
      <li><router-link to="/">Vehicles</router-link></li>
      <li><router-link to="/">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavigationBar extends Vue {}
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.logo {
  color: #FFFFFF;
}

.links {
  list-style-type: none;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #FFFFFF;
}
</style>
