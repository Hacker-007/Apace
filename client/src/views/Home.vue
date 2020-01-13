<template>
  <main>
    <div class="splash">
      <navigation-bar :logoColor="white"/>
      <carousel />
    </div>
    <car-section />
  </main>
</template>

<script lang="ts">
import Carousel from '@/components/Carousel.vue'
import CarSection from '@/components/CarSection'
import NavigationBar from '@/components/NavigationBar'

export default {
  components: {
    Carousel,
    CarSection,
    NavigationBar
  }
}
</script>

<style>
.splash {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, #171717, #1B1B1B, #1D1D1D, #1E1E1E, #000000);
}
</style>
