<template>
  <nav>
    <div :style="{ color: '#' + logoColor }">
      <h1>Apace</h1>
    </div>
    <ul class="links">
      <li><router-link to="/" :style="{ color: '#' + logoColor }"><strong>About</strong></router-link></li>
      <li><router-link to="/" :style="{ color: '#' + logoColor }"><strong>Vehicles</strong></router-link></li>
      <li><router-link to="/" :style="{ color: '#' + logoColor }"><strong>Contact</strong></router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NavigationBar extends Vue {
  @Prop(String) logoColor!: string
}
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.links {
  list-style-type: none;
  width: 20%;
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #FFFFFF;
}
</style>
