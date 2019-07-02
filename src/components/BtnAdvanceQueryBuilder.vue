<template>
  <v-btn @click="openModalQueryBuilder"
         class="text-capitalize ma-0"
         flat
         style="height: 48px; border-radius: 0px; box-shadow: inset 0px 0px 120px 20px rgba(255,255,255,0.1);"
         depressed>
    Advance query
    <v-icon>arrow_drop_down</v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: "BtnAdvanceQueryBuilder",
    methods: {
      openModalQueryBuilder() {
        this.$eventHub.$emit(this.$eventTypes.ModalBuilderQuery);
      }
    }
  }
</script>

<style scoped>

</style>
