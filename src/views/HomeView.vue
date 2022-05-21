<template>
<<<<<<< HEAD
  <main>
    <h1>HEADER!</h1>
  </main>
=======
  <ul>
    <li v-for="t in lotsOfThings" :key="t">
      <RouterLink :to="'/book/' + t">{{ t }}</RouterLink>
    </li>
  </ul>
>>>>>>> main
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      lotsOfThings: ["OL7440033M", "OL81633W", "OL14917747W"],
    };
  },
  components: {
    RouterLink,
  },
};
</script>
