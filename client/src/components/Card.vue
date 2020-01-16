<template>
  <div class="card-box">
    <h2 class="title">{{ title }}</h2>
    <b-card
      :title="'$' + price"
      tag="article"
      style="max-width: 30rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ text }}
      </b-card-text>
    </b-card>
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
@media screen and (max-width: 576px) {
  .card-body {
    height: 40vh;
    width: 15rem;
  }
}

.card-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 2rem;
}

.title {
  color: white;
  text-align: center;
  max-width: 20rem;
}

.card {
  border: black solid 0px;
  border-radius: 0rem;
}

.card-body {
  height: 60vh;
  width: 30rem;
  background-image: linear-gradient(to bottom right, #525252, #828282);
}

.card-title {
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}

.card-text {
  padding-top: 1rem;
  color: white;
  font-size: 2rem;
  text-align: center;
}
</style>
