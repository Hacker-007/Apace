<template>
  <div class="carousel">
      <div class="slides">
        <carousel-item v-for="(slide, index) in slides"
                       :key="index"
                       :imageSrc="slide.image"
                       :backgroundSrc="slide.background"
                       :id="'slide' + index"
                       :class="{inactive: slideIndex !== index}"
                       @click="show(index)">
        </carousel-item>
      </div>
    <transition name="fade" mode="out-in">
      <h3 :key="currentDescription" class="text">{{ currentDescription }}</h3>
    </transition>
    <div class="dots">
      <span v-for="(slide, index) in this.slides"
            :key="index"
            class="dot"
            :class="{active: slideIndex === index}"
            @click="show(index)">
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CarouselItem from '@/components/CarouselItem.vue'
import { gsap } from 'gsap'

@Component({
  components: {
    CarouselItem
  }
})
export default class Carousel extends Vue {
    slideIndex = 1
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
      let factor = 1100 * (index - this.slideIndex)

      if (gsap.isTweening('.item')) {
        gsap.killTweensOf('.item')
      }

      gsap.to('.item', { x: `-=${factor}`, duration: 0.8 })

      this.slideIndex = index
      this.currentDescription = this.slides[index].description
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.carousel {
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.slides {
  display: flex;
  width: 100%;
}

.text {
  text-align: center;
  font-size: 40px;
  color: #FFFFFF;
  padding-bottom: 2rem;
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

#slide0 {
  position: relative;
  right: 25%;
}

#slide2 {
  position: relative;
  left: 25%;
}
</style>
