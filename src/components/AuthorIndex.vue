<template>
  <div class="author-index">
    <div v-if="authors">{{ authorName }}</div>
  </div>
</template>

<script>
export default {
  props: ["author"],
  data() {
    return {
      authors: null,
      authorName: [],
    }
  },
  created() {
    this.getAuthor()
  },
  methods: {
    async getAuthor() {
      const resp = await fetch(`https://openlibrary.org/works/${this.author}.json`)
      const data = await resp.json()
      let authors = data.authors.map((a) => a.author.key)
      this.authors = authors

      for (let i of authors) {
        const respAuthor = await fetch(`https://openlibrary.org${i}.json`)
        const dataAuthor = await respAuthor.json()
        let authorName = dataAuthor.name
        this.authorName.push(authorName)
        console.log(authorName)
      }
    },
  },
}
</script>
