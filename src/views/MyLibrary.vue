<script>
import BookIndex from "@/components/BookIndex.vue"
import { useCounterStore } from "@/stores/pinia.js"

let counter

export default {
  setup() {
    counter = useCounterStore()
  },
  data() {
    return {
      // Main books that are displayed

      // This is what's being saved on localStorage
      
      // Not sure what the reason for the need of these "listed" arrays
      // was instead of just using the normal array

      // This is what's displayed for read books. Should always be the same
      // as the one in the pinia storage. Could be removed in the future
      mainReadBooks: [],

      mainBooks: [],

    }
  },
  components: {
    BookIndex,
  },
  created() {
    //localStorage.clear()

    // this.saveBook("https://covers.openlibrary.org/b/isbn/0450032205-M.jpg", "cool book")
    // this.saveReadBook("https://covers.openlibrary.org/b/isbn/0450032205-M.jpg", "cool book")
    // this.saveBook("https://covers.openlibrary.org/b/isbn/0393964523-M.jpg", "cool book")
    // this.saveBook("https://covers.openlibrary.org/b/isbn/0521222311-M.jpg", "cool book")

    this.getData()
    //this.saveBook("https://covers.openlibrary.org/b/isbn/1449313876-M.jpg", "cool book")
  },
  methods: {
    setToRead(cover) {
      // unused currently
      console.log(cover)
    },
    saveBook(bookCover, bookName) {
      // Saves a book to the array and forwards it to localStorage
      counter.listedBooks.push({ bookCover, bookName })
      localStorage.setItem("books", JSON.stringify(counter.listedBooks));
    },
    saveReadBook(bookCover, bookName) {
      // Saves to the read book localStorage
      if (this.checkIfRead(bookCover)) {
        return false
      }
      let read = true
      counter.listedReadBooks.push({
        bookCover,
        bookName,
        read,
      })
      localStorage.setItem(
        "readbooks",
        JSON.stringify(counter.listedReadBooks)
      );
    },
    addReadBook(bookCover, bookName) {
      // Adds a book to the read book pinia
      let read = true
      counter.readBooks.push({ bookCover, bookName, read })
      this.mainReadBooks = counter.readBooks
    },
    removeFromRead(bookCover) {
      // Removes a book that is currently in the read book array in pinia
      // and saves that change
      for (let i = 0; i < counter.readBooks.length; i++) {
        if (counter.readBooks[i].bookCover == bookCover) {
          counter.readBooks.splice(i, 1)
          counter.listedReadBooks = counter.readBooks
          this.mainReadBooks = counter.readBooks
          localStorage.setItem("readbooks", JSON.stringify(counter.listedReadBooks))
        }
      }
    },
    checkIfRead(bookCover) {
      // Checks if the book is already read
      // The books added to read were duplicated and this solved the problem.
      // Sort of.
      for (const v of counter.listedReadBooks) {
        if (v.bookCover == bookCover) {
          return true
        }
      }
      return false
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
          this.addReadBook(v.bookCover, v.bookName, v.read)
        }
      } else {
        counter.listedReadBooks = []
      }
      if (counter.listedBooks != null) {
        for (let v of counter.listedBooks) {
          this.addBook(v.bookCover, v.bookName, v.read)
        }
      } else counter.listedBooks = []
    },
  },
}
</script>

<template>
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
