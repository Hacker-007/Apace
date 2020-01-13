<template>
  <nav>
    <div class="logo">
      <h1>APACE</h1>
    </div>
    <ul class="links">
      <li v-for="(link, index) in links" :key="index"><router-link :to="link.link"><strong>{{ link.name }}</strong></router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NavigationBar extends Vue {
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

.logo {
  color: #FFFFFF;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #FFFFFF;
}
</style>
