<template>
  <div class="carbon-footprint">
    <div class="metrics">
      <div class="metric" v-for="metric in metrics" :key="metric.index">
        <h1 class="metric-title">{{ metric.title }}</h1>
        <div class="gray-box">
          <span class="metric-amount">{{ metric.amount }}</span>
          <span class="metric-time">{{ metric.time }}</span>
        </div>
      </div>
    </div>
    <b-button squared size="lg">Learn More</b-button>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CarbonFootprint extends Vue {
    metrics = [
      {
        index: 0,
        title: 'Avg. Passenger Car',
        amount: '45 Metric Tons',
        time: ' /10 yr'
      },
      {
        index: 1,
        title: 'Apace Sedan',
        amount: '18 Metric Tons',
        time: ' lifetime'
      }
    ]
}
</script>

<style>
@media (max-width: 576px) {
  .metrics {
    flex-direction: column !important;
  }

  .metric-title {
    font-size: 20px !important;
  }

  .metric-amount {
    font-size: 45px !important;
  }

  .metric-time {
    font-size: 15px !important;
  }
}

.carbon-footprint {
  height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: url('../assets/Seattle.png');
}

.metrics {
  display: flex;
  justify-content: space-around;
}

.metric {
    width: 40vw;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.metric-title {
    color: white;
    background-color: transparent;
    font-size: 30px;
    font-weight: bold;
}

.gray-box {
    background-color: rgba(81, 81, 81, 0.34);
}

.metric-amount {
    color: white;
    font-size: 65px;
    font-weight: bold;
    margin-right: 10px;
}

.metric-time {
    color: white;
    font-size: 25px;
    font-weight: bold;
}
</style>
