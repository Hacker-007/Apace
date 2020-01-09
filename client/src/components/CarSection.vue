<template>
    <div>
        <div :style="{ backgroundImage: 'url(' + this.imageSrc + ')' }"><navigation-bar /></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavigationBar from '@/components/NavigationBar.vue'

@Component({
  components: {
    NavigationBar
  }
})
export default class CarSection extends Vue {
    imageSrc = require('@/components/audi.svg')
}
</script>

<style>
</style>
