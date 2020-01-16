<template>
  <div class="cards">
    <card title="Competitors" price="42,985" text="Competitors charge high prices while providing low performance and poor quality" :showBuyNow="false"></card>
    <card title="Apace Sedan" price="29,999" text="Apace is able to provide excellent prices without compromising on the quality" :showBuyNow="true"></card>
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
.cards {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
}
</style>
