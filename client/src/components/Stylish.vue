<template>
  <div class="stylish-background">
    <img src="../assets/BlueCar.png" class="blue-car">
    <div class="stylish-container">
      <h2 class="stylish-text">Our cars are created with precision, craftsmanship, and performance. We strive to create the perfect vehicle for all people with excellent quality, durablity, and performace, all at an affordable price.</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CarSection extends Vue {}
</script>

<style>
@media (max-width: 576px) {
  .stylish-background {
    flex-wrap: wrap !important;
  }

  .blue-car {
    height: 40vh !important;
    width: 100vw !important;
  }

  .stylish-container {
    height: 20vh !important;
    width: 100vw !important;
  }

  .stylish-text {
    font-size: 15px;
  }
}

.stylish-background {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow: hidden;
}

.blue-car {
  width: 70vw;
  height: 100vh;
}

.stylish-container {
  height: 100vh;
  width: 30vw;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2rem;
}

.stylish-text {
  color: black;
  text-align: center;
}
</style>
