<script>
import { VueElement } from "@vue/runtime-dom";
import { RouterLink, RouterView } from "vue-router";
import BookIndex from "./components/BookIndex.vue";
import { useCounterStore } from "./stores/pinia.js";

let counter;

export default {
  setup() {
    counter = useCounterStore();
  },
  data() {
    return {
      // These are just here so they can be displayed in HTML
      mainReadBooks: [],
      mainBooks: [],
    }
  },
  components: {
    BookIndex,
  },
  created() {
    //localStorage.clear()
    /*
  this.saveBook("https://covers.openlibrary.org/w/id/9320974-M.jpg", "cool book")


   */
    this.getData();
    //this.saveBook("https://covers.openlibrary.org/b/isbn/1449313876-M.jpg", "cool book")
  },
  methods: {
    setToRead(cover) {
      // unused currently
      console.log(cover);
    },
    removeBook(bookCover) {
      for (let i = 0; i < counter.books.length; i++) {
        if (counter.books[i].bookCover == bookCover) {
          counter.books.splice(i, 1);

          counter.listedBooks = [];
          counter.listedBooks = counter.books;
          this.mainBooks = counter.books;

          localStorage.setItem(
            "books",
            JSON.stringify(counter.listedBooks)
          );
        }
      }
    },
    saveBook(bookCover, bookName) {
      // Saves a book to the array and forwards it to localStorage
      counter.listedBooks.push({ bookCover, bookName })
      localStorage.setItem("books", JSON.stringify(counter.listedBooks));
    },
    saveReadBook() {
      // Saves to the read book localStorage
      console.log(counter.readBooks.length);
      localStorage.setItem(
        "readbooks",
        JSON.stringify(counter.listedReadBooks)
      );
    },
    addReadBook(bookCover, bookName) {
      // Adds a book to the read book pinia
      let read = true
      counter.readBooks.push({ bookCover, bookName, read })
      counter.listedReadBooks = []
      counter.listedReadBooks = counter.readBooks;
      this.mainReadBooks = counter.readBooks
    },
    removeFromRead(bookCover) {
      // Removes a book that is currently in the read book array in pinia
      // and saves that change
      for (let i = 0; i < counter.readBooks.length; i++) {
        if (counter.readBooks[i].bookCover == bookCover) {
          counter.readBooks.splice(i, 1);
          console.log(counter.readBooks.length);
          counter.listedReadBooks = [];
          counter.listedReadBooks = counter.readBooks;
          this.mainReadBooks = counter.readBooks;

          localStorage.setItem(
            "readbooks",
            JSON.stringify(counter.listedReadBooks)
          );
        }
      }
    },
    checkIfRead(bookCover) {
      // Checks if the book is already read
      // The books added to read were duplicated and this solved the problem.
      // Sort of.
      for (const v of counter.listedReadBooks) {
        if (v.bookCover == bookCover) {
          return true;
        }
      }
      return false;
    },
    addBook(bookCover, bookName) {
      // Adds a book to books.
      let read = this.checkIfRead(bookCover);
      counter.books.push({ bookCover, bookName, read });
      this.mainBooks = counter.books;
    },
    getData() {
      // Grabs all the data and creates the arrays.
      counter.listedBooks = JSON.parse(localStorage.getItem("books"))
      counter.listedReadBooks = JSON.parse(localStorage.getItem("readbooks"))

      if (counter.listedReadBooks != null) {
        for (let v of counter.listedReadBooks) {
          this.addReadBook(v.bookCover, v.bookName, v.read);
        }
      } else {
        counter.listedReadBooks = []
      }
      if (counter.listedBooks != null) {
        for (let v of counter.listedBooks) {
          this.addBook(v.bookCover, v.bookName, v.read);
        }
      } else counter.listedBooks = []
    },
  },
};
</script>

<template>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
  <header>
    <div class="wrapper">
      <h1>Mitt bibliotek</h1>
      <div id="books">
        <BookIndex
          v-for="v in mainBooks"
          :key="v.bookCover"
          :bookCover="v.bookCover"
          :bookName="v.bookName"
          :read="v.read"
        />
      </div>
      <h1>Lästa böcker</h1>
      <div id="books">
        <BookIndex
          v-for="v in mainReadBooks"
          :key="v.bookCover"
          :bookCover="v.bookCover"
          :bookName="v.bookName"
          :read="v.read"
        />
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
body {
  font-family: "Montserrat";
}

#books {
  display: flex;
  overflow-x: auto;
}

#books > * {
  margin-left: 2%;
  flex-wrap: nowrap;
}
#books::-webkit-scrollbar {
  display: none;
}
</style>
