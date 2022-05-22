<script>
import BookIndex from "../components/BookIndex.vue"
import MyLibraryVue from "../views/MyLibrary.vue"
import { useCounterStore } from "../stores/pinia.js"
import FooterComponent from '../components/FooterComponent.vue'

let counter

export default {
  setup() {
    counter = useCounterStore()
  },
  data() {
    return {
      listOne: [
        ["https://covers.openlibrary.org/w/id/7013717-M.jpg", "The Shining", false, "OL81633W"],
        ["https://covers.openlibrary.org/w/id/9320974-M.jpg", "It", false, "OL81613W"],
        ["https://covers.openlibrary.org/w/id/8567417-M.jpg", "The Exorcist", false, "OL927215W"],
        ["https://covers.openlibrary.org/w/id/10867992-M.jpg", "Harvest Home", false, "OL24344884W"],
        ["https://covers.openlibrary.org/w/id/8274288-M.jpg", "Thinner", false, "OL149210W"],
      ],
      listTwo: [
        ["https://covers.openlibrary.org/w/id/106193-M.jpg", "Dracula", false, "OL85892W"],
        ["https://covers.openlibrary.org/w/id/10872750-M.jpg", "Frankenstein", false, "OL450063W"],
        ["https://covers.openlibrary.org/w/id/11172296-M.jpg", "And Then There Were None", false, "OL472814W"],
        ["https://covers.openlibrary.org/w/id/320591-M.jpg", "Hans Andersen's Fairy Tales", false, "OL16249171W"],
      ],
      listThree: [
        ["https://covers.openlibrary.org/w/id/9608215-M.jpg", "Canadian architecture, Prince Edward Island province", false, "OL3778999W"],
        ["https://covers.openlibrary.org/w/id/3697547-M.jpg", "Daughter of China", false, "OL25722W"],
        ["https://covers.openlibrary.org/w/id/8240310-M.jpg", "Clouds", false, "OL20247W"],
      ],
      username: "",
    }
  },
  components: {
    BookIndex,
    FooterComponent,
  },
  created() {
    this.getData()
    this.username = counter.username
  },
  methods: {
    setToRead() {
      for (let v of this.listOne) {
        if (MyLibraryVue.methods.checkIfRead(v[0])) {
          console.log("READ")
          v[2] = true
          this.$forceUpdate()
        }
      }
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
    getData() {
      counter.listedBooks = JSON.parse(localStorage.getItem("books"))
      counter.listedReadBooks = JSON.parse(localStorage.getItem("readbooks"))
      counter.username = localStorage.getItem("username")

      if (counter.username === null) {
        counter.username = "Guest"
        this.username = "Guest"
      } else {
        this.username = counter.username
      }

      // Grabs all the data and creates the arrays.
      if (counter.listedBooks === undefined) {
        counter.listedBooks = []
      }
      if (counter.listedReadBooks === undefined) {
        counter.listedReadBooks = []
      }
    },
  },
}
</script>

<template>
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
  <header>
    <h1 id="welcome">Välkommen till Book, {{ this.username }}!</h1>
    <div class="wrapper">
      <h1>För dig</h1>
      <h1>Ett besök under filten</h1>
      <div id="books">
        <BookIndex v-for="v in listOne" :key="v[0]" :bookCover="v[0]" :bookName="v[1]" :read="v[2]" :path="v[3]" />
      </div>
      <h1>Ej glömda genom generationer</h1>
      <div id="books">
        <BookIndex v-for="v in listTwo" :key="v[0]" :bookCover="v[0]" :bookName="v[1]" :read="v[2]" :path="v[3]" />
      </div>
      <h1>Vad laptopen ville ha</h1>
      <div id="books">
        <BookIndex v-for="v in listThree" :key="v[0]" :bookCover="v[0]" :bookName="v[1]" :read="v[2]" :path="v[3]" />
      </div>
    </div>
    <footer-component></footer-component>
  </header>
</template>

<style>
body {
  font-family: "Montserrat";
}

#books {
  display: flex;
  overflow-x: auto;
}

#welcome {
  text-align: center;
  padding-bottom: 3%;
  padding-top: 1%;
}

#books > * {
  margin-left: 2%;
  flex-wrap: nowrap;
}

#books::-webkit-scrollbar {
  display: none;
}
</style>
