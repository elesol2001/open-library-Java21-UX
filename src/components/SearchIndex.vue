<template>
  <div>
    <div class="header">
      <input v-model="searchfield" placeholder="search title, author, genre" />
      <br />{{ searchfield }}<br />
      <button @click="findByAuthor">Author</button>
      <button @click="findByTitle">Title</button>
      <button @click="findByGenre">Genre</button>
    </div>
    <div class="searchlist" v-for="searchResult in searchResults" :key="searchResult.key">
      <br /><br />

      <router-link :to="{ name: 'book', params: { thing: `${searchResult.olid}` } }">
        <div class="title">{{ searchResult.title }}</div></router-link
      >
      <div class="name">{{ searchResult.authorName }}</div>
      <div class="publishdate">{{ searchResult.first_publish_date }}</div>
      <div class="cover"><img :src="searchResult.coverurl" /></div>
    </div>
    <br /><br />
  </div>
</template>

<script>
export default {
  props: ["searchResults", "searchfield"],
  data() {
    return {
      searchResults: [],
    }
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

    findBooksByAuthorKey(key) {
      const LIMIT = 100
      let safeKey = encodeURIComponent(key)
      console.log(key)
      // query for works by author based on the authors key
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

<style></style>
