<template>
  <button @click="addBook" v-if="isBookAdded">
    <img src="@/assets/added-book-icon.svg" alt="Book has been added" />
  </button>
  <button @click="addBook" v-else>
    <img src="@/assets/add-book-icon.svg" alt="Add book" />
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
    addBook() {
      if (this.isBookAdded === false) {
        counter.books.push(this.book)

        console.log("New book added")
        console.log(counter.books)
      }
      // need to add else-statement to remove book on off-toggle

      this.isBookAdded = !this.isBookAdded
    },
  },
}
</script>

<style></style>
