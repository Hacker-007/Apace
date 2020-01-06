<template>
  <div class="item">
    <img :src="imageSrc">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CarouselItem extends Vue {
    @Prop(String) imageSrc!: string;
}
</script>
