<template>
  <div class="about">
    <h1>{{ thing }}</h1>
    <img :src="imageUrl" alt="" />
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
    getTitle() {
      return `https://openlibrary.org/works/${this.thing.name}.json`;
    }
  },
};
</script>
