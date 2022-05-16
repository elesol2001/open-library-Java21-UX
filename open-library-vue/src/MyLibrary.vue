<script>
import { VueElement } from '@vue/runtime-dom';
import { RouterLink, RouterView } from "vue-router";
import BookIndex from "./components/BookIndex.vue";
import { useCounterStore } from './stores/pinia.js';

let counter;

export default {
  setup(){
    counter = useCounterStore();
  },
  data() {
    return {
      books: [

      ],
      listedBooks: [

      ],
      mainReadBooks: [

      ]
    };
  },
  components: {
    BookIndex,
  },
  created(){
    //localStorage.clear()

    /*
  this.saveBook("https://covers.openlibrary.org/b/isbn/0450032205-M.jpg", "cool book")
  this.saveReadBook("https://covers.openlibrary.org/b/isbn/0450032205-M.jpg", "cool book")
   this.saveBook("https://covers.openlibrary.org/b/isbn/0393964523-M.jpg", "cool book")
   this.saveBook("https://covers.openlibrary.org/b/isbn/0521222311-M.jpg", "cool book")
   */
   this.getData();
   //this.saveBook("https://covers.openlibrary.org/b/isbn/1449313876-M.jpg", "cool book")


  },
  methods:{
    setToRead(cover){
      console.log(cover);
    },
    saveBook(bookCover, bookName){
      this.listedBooks[this.listedBooks.length] = {bookCover, bookName};
      localStorage.setItem("books", JSON.stringify(this.listedBooks));
    },
    saveReadBook(bookCover, bookName){
      if (this.checkIfRead(bookCover)){
        return false;
      }
      let read = true;
      counter.listedReadBooks[counter.listedReadBooks.length] = {bookCover, bookName, read};
      localStorage.setItem("readbooks", JSON.stringify(counter.listedReadBooks));

    },
    addReadBook(bookCover, bookName){
      let read = true;
      counter.readBooks.push({ bookCover, bookName, read });
      this.mainReadBooks = counter.readBooks;
      
    },
    removeFromRead(bookCover){
      for (let i = 0; i < counter.readBooks.length; i++){
        if (counter.readBooks[i].bookCover == bookCover){

           counter.readBooks.splice(i, 1);
           counter.listedReadBooks = counter.readBooks;
           this.mainReadBooks = counter.readBooks;
           localStorage.setItem("readbooks", JSON.stringify(counter.listedReadBooks));    
        }
      }
    },
    checkIfRead(bookCover){
      for (const v of counter.listedReadBooks){
        if (v.bookCover == bookCover){
          return true;
        }
      }
      return false;
    },
    addBook(bookCover, bookName){
      let read = this.checkIfRead(bookCover);
      this.books.push({ bookCover, bookName, read });
    },
    getData(){
      this.listedBooks = JSON.parse(localStorage.getItem("books"));
      counter.listedReadBooks = JSON.parse(localStorage.getItem("readbooks"));
      
      if (counter.listedReadBooks != null){
      for (let v of counter.listedReadBooks){
        this.addReadBook(v.bookCover, v.bookName, v.read);
      }
      } else {this.listedReadBooks = []} 
      if (this.listedBooks != null){
      for (let v of this.listedBooks){
        this.addBook(v.bookCover, v.bookName, v.read);
      } 
      } else (this.listedBooks = [])
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
      <h1>Lästa böcker</h1>
      <div id="books">
           <BookIndex v-for="v in mainReadBooks" :key="v.bookCover" :bookCover="v.bookCover" :bookName="v.bookName" :read="v.read"/>
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
