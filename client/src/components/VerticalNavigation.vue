<template>
    <div>
      <transition-group class="navigation" name="list" tag="div">
        <div v-for="tab in tabs" :key="tab.width" class="tab">
            <h1 v-if="tab.index === selectedTabIndex">{{ tab.name }}</h1>
            <h1 v-else class="line" :style="{ width: tab.width + 'px' }" @click="change(tab.index)"></h1>
        </div>
      </transition-group>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class VerticalNavigation extends Vue {
    selectedTabIndex = 0
    tabs = [
      {
        index: 0,
        name: 'Our Roots',
        width: 175
      },
      {
        index: 1,
        name: 'Eco-Friendly',
        width: 135
      },
      {
        index: 2,
        name: 'Future Concept',
        width: 95
      },
      {
        index: 3,
        name: 'Purchase',
        width: 55
      }
    ]

    change (index) {
      this.selectedTabIndex = index
      this.$emit('tabChanged', this.selectedTabIndex)
    }
}
</script>

<style>
.navigation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  margin-left: 10px;
}

.list-move {
  transition: transform 1s;
}

h1 {
  margin: 0;
  padding: 0;
}

.line {
  border-bottom: 5px solid black;
  cursor: pointer;
}
</style>
