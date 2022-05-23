<template>
  <button @click="toggleIsBookRead" v-if="isBookRead">
    <img src="@/assets/marked-as-read-icon.svg" alt="Book is toggled as read" />
  </button>
  <button @click="toggleIsBookRead" v-else>
    <img src="@/assets/mark-as-read-icon.svg" alt="Book is not toggled as read" />
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
      isBookRead: false,
    }
  },
  methods: {
    toggleIsBookRead() {
      if (this.isBookRead === false) {
        counter.readBooks.push(this.book)

        console.log("New book added")
      } else {
        for (let i = 0; i < counter.readBooks.length; i++) {
          if (this.book.title === counter.readBooks[i].title) {
            counter.books.splice(i, 1)

            console.log("Book removed")
          }
        }
      }

      this.isBookRead = !this.isBookRead
    },
  },
}
</script>

<style></style>
