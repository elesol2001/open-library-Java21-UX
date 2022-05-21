<template>
<<<<<<< HEAD
  <div class="title-index">
    <button @click="getTitle">Get title here!</button>
    <div v-if="title">{{ title }}</div>
  </div>
=======
    <div class="title-index">
        <!-- <button @click="getTitle">Get title and summary here!</button> -->
        <div v-if="title">{{ title }}</div>
        <div v-if="sum">{{ sum }}</div>
    </div>
>>>>>>> b1c7928aaa22648c79db39e2ecfdf6e07eeb2ae4
</template>

<script>
export default {
<<<<<<< HEAD
  data() {
    return {
      title: null,
    }
  },
  methods: {
    async getTitle() {
      const resp = await fetch("https://openlibrary.org/works/OL81633W.json")
      const data = await resp.json()
      const title = data.title
      this.title = title
=======
    props: ["work"],

    data() {
        return {
            title: null,
            sum: null,
        }
    },
    created() {
        this.getTitle();
    }, 
    methods: {
        async getTitle() {
            const resp = await fetch(`https://openlibrary.org/works/${this.work}.json`)
            //const resp = await fetch(`https://openlibrary.org/books/${this.work}.json`)
            const data = await resp.json()
            const title = data.title
            this.title = title

            const sum = data.description.value
            this.sum = sum
        },
>>>>>>> b1c7928aaa22648c79db39e2ecfdf6e07eeb2ae4
    },
  },
}
</script>
