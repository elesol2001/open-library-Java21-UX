<template>
<<<<<<< HEAD
  <div class="about">
<<<<<<< HEAD
    <h1>This is an about page</h1>
=======
    <h1>{{ thing }}</h1>
    <img :src="imageUrl" alt="" />


>>>>>>> main
=======
  <div class="book">
    <h1>{{ thing }}</h1>
    <img :src="imageUrl" alt="" />
    <title-index :work="thing"></title-index>
    <author-index :author="thing"></author-index>
    <summary-index></summary-index>
>>>>>>> b1c7928aaa22648c79db39e2ecfdf6e07eeb2ae4
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
