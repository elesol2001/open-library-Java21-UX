<template>
  <div class="about">
    <h1>{{ thing }}</h1>
    <img :src="imageUrl" alt="" />
  </div>
</template>

<script>
// The URL pattern to access book covers is:

// https://covers.openlibrary.org/b/$key/$value-$size.jpg

// 

// Where:

//     key can be any one of ISBN, OCLC, LCCN, OLID and ID (case-insensitive)
//     value is the value of the chosen key
//     size can be one of S, M and L for small, medium and large respectively.

export default {
  props: ["thing"],
  computed: {
    imageUrl() {
      return `https://covers.openlibrary.org/b/isbn/${this.thing}.jpg`;
      // 0450032205-M
    },
  },
};
</script>
