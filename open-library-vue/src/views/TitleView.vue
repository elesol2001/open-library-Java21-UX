<script>
import TitleIndex from "../components/TitleIndex.vue";
import AuthorIndex from "../components/AuthorIndex.vue";
import SummaryIndex from "../components/SummaryIndex.vue";
import CoverIndex from "../components/CoverIndex.vue";


export default {
    components: {
    TitleIndex,
    AuthorIndex,
    SummaryIndex,
    CoverIndex
}
}
</script>

<template>
    <CoverIndex />
    <TitleIndex />
    <AuthorIndex />
    <SummaryIndex />
</template>

