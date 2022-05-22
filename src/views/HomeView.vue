<template>
  <ul>
    <li v-for="t in lotsOfThings" :key="t">
      <RouterLink :to="'/book/' + t">{{ t }}</RouterLink>
    </li>
  </ul>
</template>

<script>
import { RouterLink } from "vue-router"

export default {
  data() {
    return {
      lotsOfThings: ["OL81633W", "OL16496863W"],
    }
  },
  components: {
    RouterLink,
  },
}
</script>
