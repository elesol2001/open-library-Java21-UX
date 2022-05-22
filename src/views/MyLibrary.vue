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
      // These are just here so they can be displayed in HTML
      mainReadBooks: [],
      mainBooks: [],
      username: "",
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
    this.username = counter.username
  },
  methods: {
    setToRead(cover) {
      // unused currently
      console.log(cover)
    },
    removeBook(bookCover) {
      for (let i = 0; i < counter.books.length; i++) {
        if (counter.books[i].bookCover == bookCover) {
          counter.books.splice(i, 1)

          counter.listedBooks = []
          counter.listedBooks = counter.books
          this.mainBooks = counter.books

          localStorage.setItem("books", JSON.stringify(counter.listedBooks))
        }
      }
    },
    saveBook(bookCover, bookName) {
      // Saves a book to the array and forwards it to localStorage
      counter.listedBooks.push({ bookCover, bookName })
      localStorage.setItem("books", JSON.stringify(counter.listedBooks))
    },
    saveReadBook() {
      // Saves to the read book localStorage
      console.log(counter.readBooks.length)
      localStorage.setItem("readbooks", JSON.stringify(counter.listedReadBooks))
    },
    displayLogin() {
      let dim = document.createElement("div")
      let popup = document.createElement("div")
      dim.id = "dim"
      popup.id = "popup"
      document.body.append(dim)
      document.body.append(popup)

      let para = document.createElement("p")
      para.id = "greeter"
      para.innerHTML = "Welcome! What's your name?"
      popup.append(para)

      let inputbox = document.createElement("input")
      inputbox.type = "text"
      inputbox.id = "inputbox"
      popup.append(inputbox)

      let button = document.createElement("input")
      button.type = "button"
      button.id = "accept-user"
      button.value = "Spara"
      popup.append(button)

      button.addEventListener("click", () => {
        this.changeName(inputbox.value)
        document.body.removeChild(popup)
        document.body.removeChild(dim)
      })
    },
    addReadBook(bookCover, bookName) {
      // Adds a book to the read book pinia
      let read = true
      counter.readBooks.push({ bookCover, bookName, read })
      counter.listedReadBooks = []
      counter.listedReadBooks = counter.readBooks
      this.mainReadBooks = counter.readBooks
    },
    removeFromRead(bookCover) {
      // Removes a book that is currently in the read book array in pinia
      // and saves that change
      for (let i = 0; i < counter.readBooks.length; i++) {
        if (counter.readBooks[i].bookCover == bookCover) {
          counter.readBooks.splice(i, 1)
          console.log(counter.readBooks.length)
          counter.listedReadBooks = []
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
      let read = this.checkIfRead(bookCover)
      counter.books.push({ bookCover, bookName, read })
      this.mainBooks = counter.books
    },
    changeName(txt) {
      counter.username = txt
      this.username = txt
      localStorage.setItem("username", txt)
    },
    getData() {
      // Grabs all the data and creates the arrays.
      counter.listedBooks = JSON.parse(localStorage.getItem("books"))
      counter.listedReadBooks = JSON.parse(localStorage.getItem("readbooks"))
      counter.username = localStorage.getItem("username")

      if (counter.username === null) {
        counter.username = "Guest"
        this.username = "Guest"
      } else {
        this.username = counter.username
      }

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
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
  <header>
    <div class="wrapper">
      <div id="user">
        <input
          type="image"
          @click="displayLogin"
          id="user-icon"
          src="https://cdn.discordapp.com/attachments/957985598944194573/977766237478219856/Profilikon.png"
          alt="user"
          width="50"
          height="50"
        />
        <h1 id="username-header">{{ this.username }}</h1>
      </div>
      <h1 id="main-header">Mitt bibliotek</h1>
      <h1>Min bokhylla</h1>
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
</template>

<style>
body {
  font-family: "Montserrat";
}

#books {
  display: flex;
  overflow-x: auto;
}

#username-header {
  padding-left: 1%;
}

#inputbox {
  margin: 0 auto;
  width: 50%;
  height: 10%;
  font-size: 1.5rem;
  text-align: center;
  border-style: 1cm line #8aa1a6;
}

#accept-user {
  background-color: #bfd6d9;
  border-radius: 5%;
  margin: 0 auto;
  margin-top: 5%;
  height: 12%;
  width: 35%;
  font-size: 1rem;
  border: 0;
}

#main-header {
  margin-left: 5%;
  padding-bottom: 2%;
  color: #736a6b;
}

#greeter {
  text-align: center;
  font-size: 2rem;
  padding-top: 2%;
}

#user-icon {
  padding-left: 3%;
  padding-top: 1%;
}

#user {
  display: flex;
}

#popup {
  height: 40%;
  background: #f2eeeb;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 35%;
  left: 50%;
  margin-top: -15%;
  margin-left: -45%;
  border-radius: 5%;
  width: 90%;
}

#books > * {
  margin-left: 2%;
  flex-wrap: nowrap;
}
#books::-webkit-scrollbar {
  display: none;
}

@media screen and (min-width: 900px) {
  #popup {
    width: 40%;
    margin-left: -25%;
  }

  #inputbox {
    width: 35%;
  }

  #accept-user {
    width: 25%;
  }
}
</style>
