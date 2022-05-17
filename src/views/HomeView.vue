<template>
  <ul>
    <li v-for="t in lotsOfThings" :key="t">
      <RouterLink :to="'/about/' + t">{{ t }}</RouterLink>
    </li>
  </ul>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      lotsOfThings: ["0450032205-M", 22, "apa"],
    };
  },
  components: {
    RouterLink,
  },
};
</script>
