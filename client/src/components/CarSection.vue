<template>
    <div>
        <div>
          <navigation-bar logoColor="black"/>
          <vertical-navigation />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavigationBar from '@/components/NavigationBar.vue'
import VerticalNavigation from '@/components/VerticalNavigation.vue'

@Component({
  components: {
    NavigationBar,
    VerticalNavigation
  }
})
export default class CarSection extends Vue {}
</script>
