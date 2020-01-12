<template>
  <nav>
    <div :style="{ color: logoColor }">
      <h1>Apace</h1>
    </div>
    <ul class="links">
      <li v-for="(link, index) in links" :key="index"><router-link :to="link.link" :style="{ color: logoColor }"><strong>{{ link.name }}</strong></router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NavigationBar extends Vue {
  @Prop(String) logoColor!: string
  links = [
    {
      name: 'About',
      link: '/'
    },
    {
      name: 'Vehicles',
      link: '/'
    },
    {
      name: 'Contact',
      link: '/'
    }
  ]
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
