<template>
  <div v-if="query">
    <p class="title font-weight-light mb-0">
      Search for <strong>"{{query}}"</strong>
      <strong>&nbsp;244</strong>
      Citing Case
    </p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "InfoTopbarSearchResult",
    computed: {
      ...mapGetters('search', ['query'])
    }
  }
</script>

<style scoped>

</style>
