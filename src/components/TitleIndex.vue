<template>
  <div class="title-index">
    <div class="book-title">
      <div v-if="title">{{ title }}</div>
    </div>
    <div>
      <div v-if="sum">{{ sum }}</div>
    </div>
  </div>
  
  <footer-component></footer-component>
</template>

<script>
export default {
  props: ["work", "summary"],

  data() {
    return {
      title: null,
      sum: null,
    }
  },
  created() {
    this.getTitle(),
    this.getSum()

  },
  methods: {
    async getTitle() {
      const resp = await fetch(`https://openlibrary.org/works/${this.work}.json`)
      const data = await resp.json()

      let title = data.title
      this.title = title
    },

    async getSum() {
      const resp = await fetch(`https://openlibrary.org/works/${this.summary}.json`)
      const data = await resp.json()

      let sum = data.description
      this.sum = sum
    }

  },
}
</script>

<style>

@media screen and (min-width: 500px) and (min-height: 700px) {
 

}

</style>