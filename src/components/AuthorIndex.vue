<template>
    <div class="author-index">
        <div v-if="authors">{{ authors }}</div>
    </div>
</template> 

<script>
export default {
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
    },
}
</script>

