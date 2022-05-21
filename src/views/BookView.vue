<template>
  <div class="book">
    <h1>{{ thing }}</h1>
    <img :src="imageUrl" alt="" />
    <title-index :work="thing"></title-index>
    <author-index :author="thing"></author-index>
  </div>
</template>

<script>
import { RouterLink } from "vue-router"
import TitleIndex from "../components/TitleIndex.vue"
import AuthorIndex from "../components/AuthorIndex.vue"

export default {
  props: ["thing"],
  computed: {
    imageUrl() {
      return `https://covers.openlibrary.org/w/olid/${this.thing}-M.jpg`
    },
  },
  components: {
    RouterLink,
    TitleIndex,
    AuthorIndex,
  },
};
</script>