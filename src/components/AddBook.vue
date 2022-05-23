<template>
  <button @click="addBook" v-if="isBookAdded">
    <img src="@/assets/added-book-icon.svg" alt="Book has been added" style="width: 4 0px; height: 40px" />
  </button>
  <button @click="addBook" v-else>
    <img src="@/assets/add-book-icon.svg" alt="Add book" style="width: 4 0px; height: 40px" />
  </button>
</template>

<script>
import { useCounterStore } from "@/stores/pinia.js"

let counter

export default {
  setup() {
    counter = useCounterStore()
  },
  data() {
    return {
      isBookAdded: false,
    }
  },
  props: ["book"],
  methods: {
    addBookToLibrary() {
      if (this.isBookAdded === false) {
        counter.books.push(this.book)
        counter.listedBooks.push(this.book)

        console.log(JSON.parse(localStorage.getItem("books")))
        localStorage.setItem("books", JSON.stringify(counter.listedBooks))
        console.log(JSON.parse(localStorage.getItem("books")))

      } else {
        for (let i = 0; i < counter.books.length; i++) {
          if (this.book.title === counter.books[i].title) {
            counter.books.splice(i, 1)

            console.log("Book removed")
          }
        }
      }

      this.isBookAdded = !this.isBookAdded
    },
  },
}
</script>

<style></style>
