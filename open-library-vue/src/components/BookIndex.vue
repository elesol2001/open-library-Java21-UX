<script>
import MyLibraryVue from '../MyLibrary.vue';
export default {
  props: ["bookCover", "bookName", "read"],
  methods:{
    addRead(){
      MyLibraryVue.methods.addReadBook(this.bookCover, this.bookName);
      MyLibraryVue.methods.saveReadBook(this.bookCover, this.bookName);
      this.$read = true;
      console.log(this.$read);
      this.$forceUpdate();
    }
  }
};
</script>

<template>
  <div class="book-layout">
    <a href="index.html">
      <img class="cover" :title="bookName" :src="bookCover" />
    </a>
    <my-library/>
    <div class="book-buttons">
    <input type="image" src="data:image/png;base64,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"  />
    <input type="image" @click="addRead" v-if="read || this.$read" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png"/>
    <input type="image" @click="addRead" v-else src="https://cdn4.iconfinder.com/data/icons/action-set/20/6_-_action_check_circle_checkmark_button_ok_icon-512.png"
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

.book-buttons > *{
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
