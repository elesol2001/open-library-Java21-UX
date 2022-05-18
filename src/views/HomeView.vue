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
      lotsOfThings: ["OL7440033M", "0450032205", "0521222311"],
    };
  },
  components: {
    RouterLink,
  },
};
</script>
