<template>
  <div class="about">
<<<<<<< HEAD
    <h1>This is an about page</h1>
=======
    <h1>{{ thing }}</h1>
    <img :src="imageUrl" alt="" />


>>>>>>> main
  </div>
</template>

<script>

export default {
  props: ["thing"],
  computed: {
    imageUrl() {
      return `https://covers.openlibrary.org/b/olid/${this.thing}-S.jpg`;
      // 0450032205-M
    },
  },
};
</script>
