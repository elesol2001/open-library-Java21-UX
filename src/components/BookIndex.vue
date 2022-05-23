<script>
import AddBook from "../components/AddBook.vue"
import MyLibraryVue from "../views/MyLibrary.vue"

export default {
  components: { AddBook },
  props: ["bookCover", "bookName", "read", "path"],
  methods: {
    addRead() {
      console.log()
      if (MyLibraryVue.methods.checkIfRead(this.bookCover)) {
        MyLibraryVue.methods.removeFromRead(this.bookCover)
        this.$read = false
        this.$forceUpdate()
        return false
      }

      MyLibraryVue.methods.addReadBook(this.bookCover, this.bookName, this.path)
      MyLibraryVue.methods.saveReadBook(this.bookCover, this.bookName, this.path)
      this.$read = true
      this.$forceUpdate()
    },
    removeB() {
      MyLibraryVue.methods.removeBook(this.bookCover)
    },
  },
  addBook() {
    AddBook.methods.addBook()
    AddBook.$forceUpdate()
  },
}
</script>

<template>
  <div class="book-layout">
    <router-link :to="{ name: 'book', params: { thing: `${this.path}` } }">
      <img class="cover" :title="bookName" :src="bookCover" />
    </router-link>
    <div class="book-buttons">
      <div>
        <AddBook :book="{ bookCover: this.bookCover, bookName: this.bookName, read: this.read, path: this.path }" />
      </div>
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
