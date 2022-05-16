import { createPinia, defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
    state: () => {
        return {
            readBooks: [],
            listedReadBooks: [],
        }
    },
})
