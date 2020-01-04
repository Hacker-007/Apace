<template>
  <nav>
    <div class="logo">
      <h1>apace</h1>
    </div>
    <ul class="links">
      <li><router-link to="/">about</router-link></li>
      <li><router-link to="/">vehicles</router-link></li>
      <li><router-link to="/">contact</router-link></li>
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
  padding: 3rem;
  padding-bottom: 0;
  height: 90px;
}

.links {
  list-style-type: none;
  width: 605px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #E2E0E0;
}
</style>
