<template>
    <div class="author-index">
        <div v-if="authors">{{ authors }}</div>
    </div>
</template> 

<script>
export default {
<<<<<<< HEAD
  data() {
    return {
      author: null,
    }
  },
  methods: {
    async getAuthor() {
      const resp = await fetch("https://openlibrary.org/authors/OL26320A.json")
      const data = await resp.json()
      const author = data.name
      this.author = author
=======
    props: ["author"],
    data() {
        return {
            authors: null,
        }
    },
    created() {
        this.getAuthor();
    },
    methods: {
        async getAuthor() {
            //const resp = await fetch("https://openlibrary.org/works/OL81633W.json")
            const resp = await fetch(`https://openlibrary.org/works/${this.author}.json`)
            const data = await resp.json()
            let authors = data.authors.map(a => a.author.key)
            this.authors = authors
            //console.log(authors)
            return `https://openlibrary.org/${this.authors}.json`
        },
>>>>>>> b1c7928aaa22648c79db39e2ecfdf6e07eeb2ae4
    },
  },
}
</script>

<<<<<<< HEAD
<template>
  <div class="author-div">
    <button @click="getAuthor">Get author here!</button>
    <div v-if="author">{{ author }}</div>
  </div>
</template>
=======
>>>>>>> b1c7928aaa22648c79db39e2ecfdf6e07eeb2ae4
