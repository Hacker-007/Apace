<template>
  <div class="box">
    <p class="title"><b>{{ title }}</b></p>
    <div class="card">
      <div class="container">
        <h3>{{ price }}</h3>
        <p>+ taxes</p>
        <div class="card-text">
          <h4><b>{{ text }}</b></h4>
        </div>
        <button v-if="showBuyNow">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Card extends Vue {
    @Prop(String) title!: string
    @Prop(String) price!: string
    @Prop(String) text!: string
    @Prop(Boolean) showBuyNow!: boolean
}
</script>

<style>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-top: 1rem;
  padding: 2rem;
  background-image: linear-gradient(to bottom right, #525252, #828282);
}

.title {
  font-size: 20px;
  color: white;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
