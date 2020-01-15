<template>
    <div class="card">
        <h1>{{ title }}</h1>
        <h3>{{ price }}</h3>
        <div class="container">
            <h4><b>{{ text }}</b></h4>
        </div>
        <button v-if="showBuyNow">Buy</button>
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
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
