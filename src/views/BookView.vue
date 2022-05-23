<template>
  <div class="book">
    <div class="book-item">
      <div id="book-image">
        <img :src="imageUrl" alt="" />
      </div>

      <div class="book-data">
        <div class="title">
          <h1>{{ thing }}</h1>
        </div>
        <div class="book-title">
          <title-index :work="thing"></title-index>
        </div>
        <div class="book-author">
          <author-index :author="thing"></author-index>
        </div>
      </div>
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
body {
  font-family: "Montserrat";
  color: rgba(89, 84, 86, 1)
}

.book {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding-top: 8%;
  padding-left: 15%;
}

.book-item {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.title {
  font-size: 20px;
  color: rgba(89, 84, 86, 1);
  font-weight: 500;
}
.book-author {
  padding-top: 3%;
  font-size: 16px;
  font-weight: 400;
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