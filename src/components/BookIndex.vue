<script>
import MyLibraryVue from "../views/MyLibrary.vue"
let link = ""
export default {
  props: ["bookCover", "bookName", "read", "path"],
  created() {
    link = this.path
  },
  methods: {
    addRead() {
      if (MyLibraryVue.methods.checkIfRead(this.bookCover)) {
        MyLibraryVue.methods.removeFromRead(this.bookCover)
        this.$read = false
        this.$forceUpdate()
        return false
      }

      MyLibraryVue.methods.addReadBook(this.bookCover, this.bookName)
      MyLibraryVue.methods.saveReadBook(this.bookCover, this.bookName)
      this.$read = true
      this.$forceUpdate()
    },
    removeB() {
      MyLibraryVue.methods.removeBook(this.bookCover)
    },
  },
}
</script>

<template>
  <div class="book-layout">
    <router-link :to="{ name: 'book', params: { thing: `${this.path}` } }">
      <img class="cover" :title="bookName" :src="bookCover" />
    </router-link>
    <div class="book-buttons">
      <input
        @click="removeB"
        type="image"
        src="https://cdn.discordapp.com/attachments/957985598944194573/976433693298147368/Property_23.png"
      />
      <input
        type="image"
        @click="addRead"
        v-if="read || this.$read"
        src="https://cdn.discordapp.com/attachments/957985598944194573/973833679895928842/bookread.png"
      />
      <input
        type="image"
        @click="addRead"
        v-else
        src="https://cdn.discordapp.com/attachments/957985598944194573/973833138679742464/bookunread.png"
      />
    </div>
  </div>
</template>

<style scope>
.book-layout {
  display: flex;
  flex-direction: column;
}

.book-buttons {
  display: flex;
  margin-top: 5%;
  padding-left: 23%;
}

.book-buttons > * {
  margin-right: 5%;
  height: 42px;
  width: 42px;
}

.cover {
  float: left;
  width: 150px;
  height: 200px;
  object-fit: cover;
}

@media screen and (min-width: 600px) {
  .cover {
    width: 200px;
    height: 300px;
  }
}
</style>
