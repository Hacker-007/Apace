<template>
    <div>
      <vertical-navigation />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VerticalNavigation from '@/components/VerticalNavigation.vue'

@Component({
  components: {
    VerticalNavigation
  }
})
export default class CarSection extends Vue {}
</script>
