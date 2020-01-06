<template>
  <div class="splash">
    <navigation-bar />
    <carousel />
  </div>
</template>

<script lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  components: {
    NavigationBar,
    Carousel
  }
}
</script>

<style>
.splash {
  background-image: linear-gradient(to bottom right, #171717, #1B1B1B, #1D1D1D, #1E1E1E, #000000);
}
</style>
