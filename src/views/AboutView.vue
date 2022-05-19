<template>
  <div class="about">
    <h1>{{ thing }}</h1>
    <img :src="imageUrl" alt="" />
    <title-index :work="thing"></title-index>
    <author-index></author-index>
    <summary-index></summary-index>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import TitleIndex from "../components/TitleIndex.vue"
import AuthorIndex from "../components/AuthorIndex.vue"
import SummaryIndex from "../components/SummaryIndex.vue"

export default {
  props: ["thing"],
  computed: {
    imageUrl() {
      return `https://covers.openlibrary.org/w/olid/${this.thing}-M.jpg`;
    },
    // authorUrl() {
    //   return `https://openlibrary.org/authors/OL26320A.json`;
    // }
  },
  components: {
    RouterLink,
    TitleIndex,
    AuthorIndex,
    SummaryIndex,
  },
};
</script>
