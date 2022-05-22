<template>
  <div class="title-index">
    <!-- <button @click="getTitle">Get title and summary here!</button> -->
    <div v-if="title">{{ title }}</div>
    <div v-if="sum">{{ sum }}</div>
  </div>
  <footer-component></footer-component>
</template>

<script>
export default {
  props: ["work"],

  data() {
    return {
      title: null,
      sum: null,
    }
  },
  created() {
    this.getTitle()
  },
  methods: {
    async getTitle() {
      const resp = await fetch(`https://openlibrary.org/works/${this.work}.json`)
      const data = await resp.json()
      const title = data.title
      this.title = title

      const sum = data.description
      this.sum = sum
    },

  },
}
</script>
