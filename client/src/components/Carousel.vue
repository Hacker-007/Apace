<template>
  <div class="carousel">
    <transition name="fade" mode="out-in">
      <div class="slides" :key="carousel-item">
        <carousel-item v-for="(slide, index) in slides.slice(previousIndex, nextIndex + 1)" :key="index" :imageSrc="slide.image" :backgroundSrc="slide.background" :show="index === slideIndex ? true : false"></carousel-item>
      </div>
    </transition>
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
    previousIndex = 0
    slideIndex = 1
    nextIndex = 2
    slides = [
      {
        'image': require('@/assets/GrandTourer.svg'),
        'background': require('@/assets/OrangeEffect.svg'),
        'description': 'Grand Tourer'
      },
      {
        'image': require('@/assets/Sedan.svg'),
        'background': require('@/assets/BlueEffect.svg'),
        'description': 'Sedan'
      },
      {
        'image': require('@/assets/SUV.svg'),
        'background': require('@/assets/PinkEffect.svg'),
        'description': 'SUV'
      }
    ]
    currentDescription = this.slides[this.slideIndex].description

    show (index: number) {
      this.slideIndex = index
      this.previousIndex = this.slideIndex - 1
      this.nextIndex = this.slideIndex + 1
      if (this.slideIndex === 0) {
        this.previousIndex = 0
      }

      if (this.slideIndex === (this.slides.length - 1)) {
        this.nextIndex = this.slides.length - 1
      }

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
