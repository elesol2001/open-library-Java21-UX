<template>
    <div id="book-title">
      <h1>{{ thing }}</h1>
    </div>

    <div id="book-image">
      <img :src="imageUrl" alt="" />
    </div>

    <div id="title-div">
      <title-index :work="thing"></title-index>
    </div>

    <div id="author-div">
      <author-index :author="thing"></author-index>
    </div>

  <footer-component></footer-component>
</template>

<script>
import TitleIndex from "../components/TitleIndex.vue"
import AuthorIndex from "../components/AuthorIndex.vue"
import FooterComponent from '../components/FooterComponent.vue'

export default {
  props: ["thing"],
  computed: {
    imageUrl() {
      return `https://covers.openlibrary.org/w/olid/${this.thing}-M.jpg`
    },
  },
  components: {
    TitleIndex,
    AuthorIndex,
    FooterComponent,
  },
}
</script>

<style>
template {
  display: flex;
}

#book-title {
  margin-top: 5%;
  margin-left: 30%;
}

#book-image {
  margin-top: 5%;
  margin-left: 15%;
}

#title-div {
  margin-top: 5%;
  margin-left: 30%;
}

#author-div {
  margin-top: 20em;
  left: 50%;
}

@media screen and (min-width: 500px) and (min-height: 700px) {
  .book {
    margin: auto;
    width: 50%;
    padding: 1em;
    text-align: center;
  }
}
</style>