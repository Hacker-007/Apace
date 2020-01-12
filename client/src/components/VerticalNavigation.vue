<template>
    <div class="vertical-nav">
        <div v-for="(tab, index) in tabs" :key="index">
            <h1 v-if="index === selectedTabIndex">{{ tab.name }}</h1>
            <h1 v-else class="line" :style="{ width: tab.width + 'px' }" @click="change(index)"></h1>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class VerticalNavigation extends Vue {
    selectedTabIndex = 0
    tabs = [
      {
        name: 'Our Roots',
        width: 175
      },
      {
        name: 'Eco-Friendly',
        width: 135
      },
      {
        name: 'Future Concept',
        width: 95
      },
      {
        name: 'Purchase',
        width: 55
      }
    ]

    change (index) {
      this.selectedTabIndex = index
    }
}
</script>

<style>
.vertical-nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  margin-left: 10px;
}

h1 {
  margin: 0;
  padding: 0;
}

.line {
  border-bottom: 5px solid black;
}
</style>
