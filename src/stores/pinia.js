import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      readBooks: [],
      books: [],
      listedReadBooks: [],
      listedBooks: [],
    }
  },
})
