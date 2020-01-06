<template>
  <div class="carousel">
    <div class="slide">
      <div class="car">
        <img :src="slides[slideIndex].image">
        <h3 class="description">{{ slides[slideIndex].description }}</h3>
      </div>
      <div class="dots">
        <span v-for="(slide, index) in this.slides" :key="index" class="dot" :class="{ active: (slideIndex == index) }" @click="show(index)"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Carousel extends Vue {
    slideIndex: number = 1;
    slides = [
      {
        'image': require('@/assets/GrandTourer.svg'),
        'description': 'Grand Tourer'
      },
      {
        'image': require('@/assets/Sedan.svg'),
        'description': 'Sedan'
      },
      {
        'image': require('@/assets/SUV.svg'),
        'description': 'SUV'
      }
    ];

    show (index: number) {
      this.slideIndex = index
    }
}
</script>

<style>
.carousel {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-contents: center;
}

.description {
  text-align: center;
  color: #FFFFFF;
}

.dots {
  text-align: center;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
</style>
