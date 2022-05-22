<template>
  <button @click="toggleIsBookRead" v-if="isBookRead">
    <img src="@/assets/marked-as-read-icon.svg" alt="Book is toggled as read" />
  </button>
  <button @click="toggleIsBookRead" v-else>
    <img src="@/assets/mark-as-read-icon.svg" alt="Book is not toggled as read" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      isBookRead: false,
    }
  },
  methods: {
    toggleIsBookRead() {
      this.isBookRead = !this.isBookRead
    },
  },
}
</script>

<style></style>
