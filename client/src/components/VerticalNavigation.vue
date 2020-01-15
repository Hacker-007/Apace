<template>
    <div>
      <transition-group class="navigation" name="list" tag="div">
        <div v-for="tab in tabs" :key="tab.width" class="tab">
            <h3 v-if="tab.index === selectedTabIndex" class="caption">{{ tab.name }}</h3>
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
        name: 'Beautiful Design',
        width: 15
      },
      {
        index: 1,
        name: 'Eco Friendly',
        width: 55
      },
      {
        index: 2,
        name: 'Future Concept',
        width: 95
      },
      {
        index: 3,
        name: 'Competitive Pricing',
        width: 115
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

.caption {
  text-align: right;
  font-size: 20px;
  display: inline-block;
  color: black;
}

.line {
  border-bottom: 5px solid black;
  cursor: pointer;
  float: right;
}
</style>
