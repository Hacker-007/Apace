<template>
  <div class="item">
    <img class="itemBackground" :src="backgroundSrc" v-if="show">
    <img class="itemForeground" :src="imageSrc">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CarouselItem extends Vue {
    @Prop(String) imageSrc!: string
    @Prop(String) backgroundSrc!: string
    @Prop(Boolean) show!: boolean
}
</script>

<style>
.item {
  position: relative;
}

.itemBackground {
  position: absolute;
  top: 50%;
  left: 50%;
}

.itemForeGround {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
