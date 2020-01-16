<template>
  <main>
    <div class="hero">
      <navigation-bar color="text-white"/>
      <carousel />
    </div>
    <stylish />
    <carbon-footprint />
    <future-concept />
    <cards />
  </main>
</template>

<script lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import Carousel from '@/components/Carousel.vue'
import Stylish from '@/components/Stylish.vue'
import CarbonFootprint from '@/components/CarbonFootprint..vue'
import FutureConcept from '@/components/FutureConcept.vue'
import Cards from '@/components/Cards.vue'

export default {
  components: {
    NavigationBar,
    Carousel,
    Stylish,
    CarbonFootprint,
    FutureConcept,
    Cards
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
</style>
