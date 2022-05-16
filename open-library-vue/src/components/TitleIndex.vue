<template>
    <div class="title-index">
        <button @click="getTitle">Get title here!</button>
        <div v-if="title">
            <h1>{{ title }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: null
        }
    },
    methods: {
        async getTitle() {
            const resp = await fetch("https://openlibrary.org/works/OL81633W.json")
            const data = await resp.json()
            const title = data.title
            this.title = title
        }
    },
}
</script>