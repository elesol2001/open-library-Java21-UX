<script>
export default {
    data() {
        return {
            sum: null,
        }
    },
    methods: {
        async getSum() {
            const resp = await fetch("https://openlibrary.org/works/OL81633W.json")
            const data = await resp.json()
            const sum = data.description.value
            this.sum = sum
        },
    },
}
</script>

<template>
    <div class="sum-div">
        <button @click="getSum">Get summary here!</button>
        <div v-if="sum">{{ sum }}</div>
    </div>
</template>
