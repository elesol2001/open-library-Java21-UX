<template>
  
    <div>
      <input class="searchfield" id="indexsearch" v-model="searchfield" placeholder="search title, author" />
      <br />{{ }}<br />
      <h1 id="text"> Search results </h1>
    </div>
    <div class="meny">
      <button @click="findByAuthor">Author</button>
      <button @click="findByTitle">Title</button>
      <hr />
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
        <div>
          <AddBook
            :book="{
              bookCover: searchResult.coverurl,
              bookName: searchResult.title,
              read: false,
              path: searchResult.olid,
            }"
          />
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

<style scoped>
body {
  font-family: "Montserrat";
  color: rgba(89, 84, 86, 1);
}
.searchfield {
   box-sizing: border-box;
  position: fixed;
  height: 5%;
  left: 46%;
  right: 15%;
  top: 0.1%;
  text-indent: 10%;
  background: #ffffff;
  border: 2px solid #8aa1a6;
  border-radius: 20px;
  margin-top: 2.5%;  
}


#appsearch {
  z-index: -1;
  display:fixed;
}
.meny {
  position: absolute;
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  margin-left: 15%;
  column-gap: 5%;
}
button {
  outline: none;
  border: none;
  background-color: #ffffff;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 500;
}
hr {
  width: 250px;
  height: 1px;
  color: rgba(138, 161, 166, 1);
  position: absolute;
  top: 70%;
  background-color: rgba(138, 161, 166, 1);
}

#text {
  font-size: large;
  margin-left: 16%;
}

.searchlist {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding-top: 8%;
  padding-left: 15%;
}
.book-meta-data {
  padding-top: 10%;
  padding-left: 3%;
}
.title {
  font-size: 20px;
  color: rgba(89, 84, 86, 1);
  font-weight: 500;
}
.name {
  padding-top: 3%;
  font-size: 16px;
  font-weight: 400;
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

#bottom-navigation-bar {
  bottom: 0px;
  position: fixed;
}
#bottom-footer {
  bottom: 0px;
  position: fixed;
}

</style>
