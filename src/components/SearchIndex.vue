<template>
  <div>
    <input
      v-model="searchfield"
      placeholder="search title, author, genre"
    /><br />{{ searchfield }}<br />
    <button @click="findByAuthor">Author</button>
    <button @click="findByTitle">Title</button>
    <button @click="findByGenre">Genre</button>
    <div v-for="searchResult in searchResults" :key="searchResult.key">
      <br><br>
      <div class="title">{{ searchResult.title }}</div>
        <div class="name">{{ searchResult.authorName}}</div>
        <div class="publishdate">{{ searchResult.first_publish_date}}</div>
        <div class="covers">{{searchResult.covers}}</div>
        <img src="{{searchResult.coverurl}}"/>
    </div>
    <br><br>
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
    
      let author = encodeURIComponent(this.searchfield);
      
      return fetch(`https://openlibrary.org/search/authors.json?q=${author}`)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((json) => {
          let author= json.docs[0];
          let key= json.docs[0].key;
          console.log(key);
          this.findBooksByAuthorKey(key).then((result) => {
            this.searchResults = result.map((work) => {
              console.log(work);
              work.authorName = author.name;
              let olid = work.key.replace(new RegExp("^/works/"),'');
              work.coverurl = "https://covers.openlibrary.org/w/olid/"+ work.key+"-S.jpg";
              //work.coverurl = "https://covers.openlibrary.org/b/olid/"+olid+"-S.jpg";
              return work;
            });
          });
          console.log("apa");
          console.log(this.searchResults);
        });
    },
   
    findBooksByAuthorKey(key) {
      const LIMIT = 100;
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
    
<style scoped>
.title{
  font-family:Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>
