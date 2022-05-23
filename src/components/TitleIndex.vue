<template>
  <div class="title-index">
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
      title: [],
      sum: [],
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
      const resp = await fetch(`https://openlibrary.org/works/${this.work}.json`)
      const data = await resp.json()

      let sum = data.description.value
      this.sum = sum
    }

  },
}
</script>

<style>

@media screen and (min-width: 500px) and (min-height: 700px) {
 
 .title {
    margin: 10em;
  }
  .title-index {
    margin: 1em;
  }

}

</style>