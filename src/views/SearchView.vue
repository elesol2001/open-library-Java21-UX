<script>
import TitleIndex from "../components/TitleAndSumIndex.vue"
import AuthorIndex from "../components/AuthorIndex.vue"

export default {
  components: {
    TitleIndex,
    AuthorIndex,
  },
}
</script>

<template>
  <title-index></title-index>
  <author-index></author-index>
  <summary-index></summary-index>
</template>
