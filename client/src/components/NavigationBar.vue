<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#"><span class="title"><b>APACE</b></span></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" link-classes="text-white">About</b-nav-item>
          <b-nav-item href="#" link-classes="text-white">Vehicles</b-nav-item>
          <b-nav-item href="#" link-classes="text-white">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

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
.nav-link {
  display: inline-block;
}

.nav-link::after {
  display: block;
  content: '';
  border-bottom: solid 2px #FFFFFF;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
  transform-origin: 0% 50%;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.navbar.navbar-dark.bg-dark {
    background-color: transparent !important;
 }

.title {
  font-size: 30px;
  letter-spacing: 4px;
}
</style>
