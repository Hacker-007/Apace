<template>
  <div class="carousel">
    <div class="slides">
      <carousel-item v-for="(slide, index) in slides" :key="index" :imageSrc="slide.image"></carousel-item>
    </div>
    <transition name="fade" mode="out-in">
      <h3 :key="currentDescription" class="text">{{ currentDescription }}</h3>
    </transition>
    <div class="dots">
      <span v-for="(slide, index) in this.slides" :key="index" class="dot" @click="show(index)"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CarouselItem from '@/components/CarouselItem.vue'

@Component({
  components: {
    CarouselItem
  }
})
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
    currentDescription: string = this.slides[this.slideIndex].description;

    show (index: number) {
      this.slideIndex = index
      this.currentDescription = this.slides[this.slideIndex].description
    }
}
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: all .3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.carousel {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  overflow: hidden;
}

.slides {
  display: flex;
}

.text {
  text-align: center;
  font-size: 30px;
  color: #FFFFFF;
  padding-bottom: 2rem;
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
