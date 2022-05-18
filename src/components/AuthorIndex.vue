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
            const resp = await fetch("https://openlibrary.org/authors/OL26320A.json")
            const data = await resp.json()
            const author = data.name
            this.author = author
        },
    },
}
</script>

<template>
    <div class="author-div">
        <!-- <button @click="getAuthor">Get author here!</button> -->
        <div v-if="author">{{ author }}</div>
    </div>
</template>
