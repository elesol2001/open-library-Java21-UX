<template>
  <div class="book">
    <h1>{{ thing }}</h1>
    <img :src="imageUrl" alt="" />
    <div id="title-div">
      <title-index :work="thing"></title-index>
    </div>
    <div id="author-div">
      <author-index :author="thing"></author-index>
    </div>
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
.book {
  display: flex;
}

.book h1 {
  position: absolute;
  margin-top: 5%;
  left: 50%;
}

.book img {
  display: flex;
  margin-top: 5%;
  margin-left: 20%;
}

.book #title-div {
  position: absolute;
  margin-top: 10%;
  left: 50%;
}
.book #author-div {
  position: absolute;
  margin-top: 15%;
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