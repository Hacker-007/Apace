<template>
  <div class="item">
    <img class="itemForeground" :src="imageSrc">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CarouselItem extends Vue {
    @Prop(String) imageSrc!: string
    @Prop(String) backgroundSrc!: string
}
</script>

<style>
.item {
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: center;
}

.itemForeground {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.inactive {
  cursor: pointer;
}
</style>
