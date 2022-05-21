import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
<<<<<<< HEAD
  state: () => {
    return {
      readBooks: [],
      books: [],
      listedReadBooks: [],
      listedBooks: [],
    }
  },
=======
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
        }
    },
>>>>>>> b1c7928aaa22648c79db39e2ecfdf6e07eeb2ae4
})
