<template>
    <div class="car-section">
      <div v-if="selectedIndex == 0"><h1>0</h1></div>
      <div v-else-if="selectedIndex == 1"><h1>1</h1></div>
      <div v-else-if="selectedIndex == 2"><h1>2</h1></div>
      <div v-else class="cards">
        <card title="Closest Competitor" price="42,985" text="lorem ipsum" :showBuyNow="false"></card>
        <card title="Apace Sedan" price="29,999" text="lorem ipsum" :showBuyNow="true"></card>
      </div>
      <vertical-navigation @tabChanged="changeContent" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VerticalNavigation from '@/components/VerticalNavigation.vue'
import Card from '@/components/Card.vue'

@Component({
  components: {
    VerticalNavigation,
    Card
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
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.cards {
  display: flex;
  justify-content: space-between;
}
</style>
