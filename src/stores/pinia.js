import { createPinia, defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      // List of books you have read
      readBooks: [],
      // List of books added to the list
      books: [],
      // Read books but for saving to localStorage
      listedReadBooks: [],
      // See above
      listedBooks: [],
      username: "Guest",
    }
  },
})
