<template>
    <div class="author-div">
        <div v-if="author">{{ author }}</div>
    </div>
</template> 

<script>
export default {
    data() {
        return {
            author: null,
        }
    },
    created() {
        this.getAuthor();
    },
    methods: {
        async getAuthor() {
            const resp = await fetch("https://openlibrary.org/authors/OL2162284A.json")
            const data = await resp.json()
            const author = data.name
            this.author = author
        },
    },
}
</script>

