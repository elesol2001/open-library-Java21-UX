<template>
  <div>
    <input
      v-model="searchfield"
      placeholder="search title, author, genre"
    /><br />{{ searchfield }}<br />
    <button @click="findByAuthor">Author</button>
    <button @click="findByTitle">Title</button>
    <button @click="findByGenre">Genre</button>
    <div v-for="searchResult in searchResults" :key="searchResult.id">
      <h2>{{ searchResult.title }}</h2>
        <div>{{ searchResult}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["searchResults", "searchfield"],
  data() {
    return {
      searchResults: [{ Author: "hejhej", id: 1 }],
    };
  },
  methods: {
    findByAuthor() {
      console.log("findByAuthorIsCalled");
      console.log(this.searchfield);
      this.searchResults[0] = { Author: this.searchfield, id: 1 };
      let author = encodeURIComponent(this.searchfield);
      
      // query for author objects
      return fetch(`https://openlibrary.org/search/authors.json?q=${author}`)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((json) => {   
          console.log(json.docs[0]);
          return json.docs[0].key;
        })
        .then((key) => {
          console.log(key);
          this.findBooksByAuthorKey(key).then((result) => {
            this.searchResults = result;
          });
          console.log("apa");
          console.log(this.searchResults);
        });
    },
   
    findBooksByAuthorKey(key) {
      const LIMIT = 500;
      let safeKey = encodeURIComponent(key);
      console.log(key);
      // query for works by author based on the authors key
      return fetch(
        `https://openlibrary.org/authors/${safeKey}/works.json?limit=${LIMIT}`
      )
        .then((res) => {
          console.log(res); 
          return res.json();
        })
        .then((json) => {
          console.log(json);
          return json.entries;
        });
      let obj = response.json();
      return obj.entries;
    },
  },
};
</script>
    
<style>
</style>