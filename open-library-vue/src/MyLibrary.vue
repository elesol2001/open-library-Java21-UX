<script>
import { RouterLink, RouterView } from "vue-router";
import BookIndex from "./components/BookIndex.vue";

export default {
  data() {
    return {
      books: [

      ],
      readbooks: [
        "https://covers.openlibrary.org/b/isbn/0450032205-M.jpg",
        "https://covers.openlibrary.org/b/isbn/4758010374-M.jpg",
      ],
      theArray: [

      ]
    };
  },
  components: {
    BookIndex,
  },
  created(){
    this.getData();
   // this.saveBook("https://covers.openlibrary.org/b/isbn/0450032205-M.jpg", "cool book")
  },
  methods:{
    saveBook(bookCover, bookName){
      this.theArray[this.theArray.length] = {bookCover, bookName};
      localStorage.setItem("books", JSON.stringify(this.theArray));
    },
    addBook(bookCover, bookName){
      let read = false;
      for (const v of this.readbooks){
        if (bookCover === v){
          read = true;
        }
      }
      this.books[this.books.length] = { bookCover, bookName, read };
    },
    getData(){
      this.theArray = JSON.parse(localStorage.getItem("books"));
      console.log(this.theArray);
      for (let v of this.theArray){
        this.addBook(v.bookCover, v.bookName, v.read);
      }
    }
  }
}


</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Mitt bibliotek</h1>
      <div id="books">
           <BookIndex v-for="v in books" :key="v.bookCover" :bookCover="v.bookCover" :bookName="v.bookName" :read="v.read"/>
      </div>
      <h1>de bästa!</h1>
      <div id="books">
           <BookIndex v-for="v in books" :key="v.bookCover" :bookCover="v.bookCover" :bookName="v.bookName" :read="v.read"/>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
#books{
  display: flex;
  overflow-x: auto;
}

#books > *{
  margin-left: 2%;
  flex-wrap: nowrap;
}
#books::-webkit-scrollbar {
  display: none;
}

</style>
