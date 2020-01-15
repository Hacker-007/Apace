<template>
  <main>
    <div class="hero">
      <navigation-bar />
      <carousel />
    </div>
    <car-section class="car-section"/>
  </main>
</template>

<script lang="ts">
import Carousel from '@/components/Carousel.vue'
import CarSection from '@/components/CarSection.vue'
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  components: {
    Carousel,
    CarSection,
    NavigationBar
  }
}
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.hero {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, #171717, #1B1B1B, #1D1D1D, #1E1E1E, #000000);
}

.car-section {
  background-image: linear-gradient(to bottom right, #171717, #1B1B1B, #1D1D1D, #1E1E1E, #000000);
}
</style>
