<script>
import { VueElement } from "@vue/runtime-dom"
import { RouterLink, RouterView } from "vue-router"
import BookIndex from "../components/BookIndex.vue"
import { useCounterStore } from "../stores/pinia.js"

let counter

export default {
  setup() {
    counter = useCounterStore()
  },
  data() {
    return {
      listOne: [
        ["https://covers.openlibrary.org/b/isbn/1465408703-M.jpg", "cool book", false],
        ["https://covers.openlibrary.org/b/isbn/1465408703-M.jpg", "cool book", false],
      ],
      listTwo: [
        ["https://covers.openlibrary.org/b/isbn/1465408703-M.jpg", "cool book", false]
      ],
    }
  },
  components: {
    BookIndex,
  },
  created() {
    
  },
  methods: {
    setToRead(cover) {
      // unused currently
      console.log(cover)
    },
    removeBook(bookCover) {
      for (let i = 0; i < counter.listedBooks.length; i++) {
        if (counter.listedBooks[i].bookCover == bookCover) {
          counter.listedBooks.splice(i, 1)
          localStorage.setItem("books", JSON.stringify(counter.listedBooks))
        }
      }
    },
    saveBooks() {
      // Saves a book to the array and forwards it to localStorage
      localStorage.setItem("books", JSON.stringify(counter.listedBooks))
    },
    saveReadBook() {
      // Saves to the read book localStorage
      localStorage.setItem("readbooks", JSON.stringify(counter.listedReadBooks))
    },
    addReadBook(bookCover, bookName) {
      let read = true
      counter.listedReadBooks.push({ bookCover, bookName, read })
      this.saveReadBook()
    },
    removeFromRead(bookCover) {
      for (let i = 0; i < counter.listedReadBooks.length; i++) {
        if (counter.listedReadBooks[i].bookCover == bookCover) {
          counter.listedReadBooks.splice(i, 1)
          localStorage.setItem("readbooks", JSON.stringify(counter.listedReadBooks))
        }
      }
    },
    checkIfRead(bookCover) {
      for (const v of counter.listedReadBooks) {
        if (v.bookCover == bookCover) {
          return true
        }
      }
      return false
    },
    addBook(bookCover, bookName) {
      // Adds a book to books.
      let read = this.checkIfRead(bookCover)
      counter.books.push({ bookCover, bookName, read })
      this.saveBooks()
    },
  },
}
</script>

<template>
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
  <header>
    <div class="wrapper">
      <h1>Lisa's Validated Books</h1>
      <div id="books">
        <BookIndex
          v-for="v in listOne"
          :key="v[0]"
          :bookCover="v[0]"
          :bookName="v[1]"
          :read="v[2]"
        />
      </div>
      <h1>Tag Vandalization From People of openlibrary</h1>
      <div id="books">
        <BookIndex
          v-for="v in listTwo"
          :key="v[0]"
          :bookCover="v[0]"
          :bookName="v[1]"
          :read="v[2]"
        />
      </div>
      <h1>david</h1>
      <div id="books">
        <BookIndex
          v-for="v in listTwo"
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
