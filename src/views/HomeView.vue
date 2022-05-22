<template>
  <ul>
    <li v-for="t in lotsOfThings" :key="t">
      <RouterLink :to="'/book/' + t">{{ t }}</RouterLink>
    </li>
  </ul>
  <footer-component></footer-component>
</template>

<script>
import { RouterLink } from "vue-router"
import FooterComponent from '../components/FooterComponent.vue'

export default {
  data() {
    return {
      lotsOfThings: ["OL81633W", "OL16496863W"],
    }
  },
  components: {
    RouterLink
    FooterComponent,
  },
}
</script>
