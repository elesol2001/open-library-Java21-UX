<template>
  <div class="book">
    <div class="book-image">
      <img :src="imageUrl" alt="" />
    </div>

    <div class="book-data">
      <div class="book-title">
        <h1><title-index :work="thing"></title-index></h1>
      </div>
      <div class="book-author">
        <author-index :author="thing"></author-index>
      </div>
      <div class="line"></div>
      <div class="book-summary">
        <h2>Beskrivning</h2>
        <title-index :summary="thing"></title-index>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<script>
import TitleIndex from "../components/TitleAndSumIndex.vue"
import AuthorIndex from "../components/AuthorIndex.vue"
import FooterComponent from "../components/FooterComponent.vue"

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
  color: rgba(89, 84, 86, 1);
}

.book {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem ;

}

.book-data > div {
  margin-bottom: 1rem;
  margin-left: 2rem;
  margin-left: 2rem;
}

.book-title {
  text-align: center;
}

.book-author {
  text-align: center;
}

.line {
  width: 85%;
  height: 2px;
  color: rgba(138, 161, 166, 1);
  background-color: rgba(138, 161, 166, 1);
  align-items: center;
}

.book-summary {
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: left;
}

@media screen and (min-width: 900px) {
  .book {
    display: flex;
    flex-direction: row;
    margin-left: 15rem;
    margin-right: 15rem;
  }

  .book-data {
    margin-left: 3rem;
  }

  .book-title {
    text-align: left;
  }

  .book-author {
    text-align: left;
  }

  .book-summary {
    text-align: left;
    margin: 0;
  }
}
</style>
