<template>
  <div class="cards">
    <card title="Competitors" price="42,985" text="Competitors charge high prices while providing low performance and poor quality." :showBuyNow="false"></card>
    <div class="ourCard">
      <card title="Apace Sedan" price="29,999" text="Apace is able to provide excellent prices without compromising on the quality." :showBuyNow="true"></card>
      <h3 class="buyText"><strong>BUY NOW</strong></h3>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class Cards extends Vue {}
</script>

<style>
.ourCard {
  position: relative;
}

.cards {
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #1b1b1b;
}

.buyText {
  position: absolute;
  top: 75%;
  left: 35%;
  padding: 1rem;
  background-color: white;
  color: black;
  cursor: pointer;
  transition: 0.3s;
}

.buyText:hover {
  background-color: black;
  color: white;
}
</style>
