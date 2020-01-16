<template>
  <b-carousel
    id="carousel-1"
    :interval="0"
    controls
    indicators
    background="transparent"
    style="text-shadow: 1px 2px 2px #333;"
  >
    <b-carousel-slide v-for="(slide, index) in slides"
      :key="index"
      :caption="slide.description"
      :img-src="slide.image"
      :class="{ smaller: slide.description === 'Grand Tourer' }"
      >
    </b-carousel-slide>
  </b-carousel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Carousel extends Vue {
    slides = [
      {
        'image': require('@/assets/GrandTourer.png'),
        'description': 'Grand Tourer'
      },
      {
        'image': require('@/assets/Sedan.png'),
        'description': 'Sedan'
      },
      {
        'image': require('@/assets/SUV.png'),
        'description': 'SUV'
      }
    ]
}
</script>

<style>
@media (max-width: 500px) {
  .smaller > img {
    width: 95% !important;
  }
}

@media (max-width: 1024px) {
  .carousel-control-prev, .carousel-control-next {
    display: none;
  }
}

.carousel-inner {
  width: 100%;
  height: 93vh !important;
}

.carousel-inner > .carousel-item {
  position: relative;
  height: 100%;
}

.carousel-inner > .carousel-item > img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  height: 60% !important;
  object-fit: contain !important;
}

.smaller > img {
  width: 70%;
  margin: auto;
}

.dots {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 2px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  transition: background-color .3s ease;
}

.active {
  background-color: #D26BFF;
}
</style>
