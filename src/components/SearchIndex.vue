<template>
  <div class="searchpage">
    <div id="rectangle"></div>
    <div>
      <input id="searchfield" v-model="searchfield" placeholder="search title, author, genre" />
      <br />{{ searchfield }}<br />
    </div>
    <div>
      <button @click="findByAuthor">Author</button>
      <button @click="findByTitle">Title</button>
      <button @click="findByGenre">Genre</button>
    </div>

    <div class="searchlist" v-for="searchResult in searchResults" :key="searchResult.key">
      <div class="search-list-item">
        <div class="cover"><img :src="searchResult.coverurl" /></div>
        <div class="book-meta-data">
          <router-link :to="{ name: 'book', params: { thing: `${searchResult.olid}` } }">
            <div class="title">{{ searchResult.title }}</div></router-link
          >

          <div class="name">{{ searchResult.authorName }}</div>
          <div class="publishdate">{{ searchResult.first_publish_date }}</div>
        </div>
        <div><AddBook :book="{ bookCover: searchResult.coverurl, bookName: searchResult.title }" /></div>
      </div>
    </div>
  </div>

  <footer-component></footer-component>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue"
import AddBook from "./AddBook.vue"

export default {
  props: ["searchResults", "searchfield"],
  data() {
    return {
      searchResults: [],
    }
  },
  components: {
    AddBook,
    FooterComponent,
  },
  methods: {
    findByAuthor() {
      let author = encodeURIComponent(this.searchfield)

      return fetch(`https://openlibrary.org/search/authors.json?q=${author}`)
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          let author = json.docs[0]
          let key = json.docs[0].key

          this.findBooksByAuthorKey(key).then((result) => {
            this.searchResults = result.map((work) => {
              work.authorName = author.name

              if ("covers" in work) {
                let coverId = work.covers[0]
                work.coverurl = "https://covers.openlibrary.org/w/id/" + coverId + "-M.jpg"
              } else {
              }
              let olid = work.key.replace(new RegExp("^/works/"), "")
              work.olid = olid
              return work
            })
            console.log(this.searchResults)
          })
        })
    },
    findByTitle() {
      let title = encodeURIComponent(this.searchfield)

      return fetch(`http://openlibrary.org/search.json?title=${title}`)
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          console.log(json)

          this.searchResults = json.docs.map((work) => {
            if ("author_name" in work) {
              work.authorName = work.author_name[0]
            }
            let olid = work.key.replace(new RegExp("^/works/"), "")
            work.olid = olid
            let coverId = work.cover_i
            work.coverurl = "https://covers.openlibrary.org/w/id/" + coverId + "-M.jpg"
            work.first_publish_date = work.first_publish_year

            return work
          })
        })
    },
    findBooksByAuthorKey(key) {
      const LIMIT = 100
      let safeKey = encodeURIComponent(key)
      console.log(key)

      return fetch(`https://openlibrary.org/authors/${safeKey}/works.json?limit=${LIMIT}`)
        .then((res) => {
          console.log(res)
          return res.json()
        })
        .then((json) => {
          console.log(json)
          return json.entries
        })
      let obj = response.json()
      return obj.entries
    },
  },
}
</script>

<style>
#searchfield {
  box-sizing: border-box;
  position: absolute;
  height: 7%;
  left: 49.22%;
  right: 12.76%;
  top: 3%;
  bottom: 23.14%;
  text-indent: 10%;
  background: #ffffff;
  border: 2px solid #8aa1a6;
  border-radius: 20px;
}

.searchlist {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.search-list-item > div {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.search-list-item > .book-meta-data {
  display: flex;
  flex-direction: column;
}
</style>
