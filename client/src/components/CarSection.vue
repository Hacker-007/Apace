<template>
    <div class="car-section">
      <vertical-navigation @tabChanged="changeContent" />
      <div v-if="selectedIndex == 0"><h1>0</h1></div>
      <div v-else-if="selectedIndex == 1"><h1>1</h1></div>
      <div v-else-if="selectedIndex == 2"><h1>2</h1></div>
      <div v-else>
        <h1 class="price">$</h1>
        <span>3</span>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VerticalNavigation from '@/components/VerticalNavigation.vue'

@Component({
  components: {
    VerticalNavigation
  }
})
export default class CarSection extends Vue {
  selectedIndex = 0

  changeContent (newIndex: number) {
    this.selectedIndex = newIndex
  }
}
</script>

<style>
.car-section {
  display: flex;
  justify-content: center space-around;
  align-items: center;
  margin-top: 5rem;
}

.price {
  font-size: 8rem;
}
</style>
