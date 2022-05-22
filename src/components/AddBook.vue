<template>
  <button @click="addBook" v-if="isBookAdded">
    <img src="@/assets/added-book-icon.svg" alt="Book has been added" />
  </button>
  <button @click="addBook" v-else>
    <img src="@/assets/add-book-icon.svg" alt="Add book" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      isBookAdded: false,
    }
  },
  methods: {
    addBook() {
      this.isBookAdded = !this.isBookAdded
    },
  },
}
</script>

<style></style>
