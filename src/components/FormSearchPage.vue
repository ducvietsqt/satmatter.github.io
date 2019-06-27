<template>
  <div class="form_search">
    <v-form>
      <v-card-title class="justify-center">
        <img src="../assets/logo_thumb.png" width="45" alt="">
        <span class="headline ml-3">
          Search Matter
        </span>
      </v-card-title>
      <v-text-field
        append-icon="location_on"
        single-line
        clear-icon="close"
        label="Search Matter"
        clearable
        solo
        type="text"
        class="mx-auto mb-3"
        hide-details
        style="width: 600px; border-radius: 28px; border: solid 2px; overflow:hidden;"
        @click:append="toggleModalJur"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="" color="primary">Search</v-btn>
        <v-btn @click="openModalQueryBuilder" class="" color="primary">Advance query</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: "FormSearchPage",
    methods: {
      toggleModalJur() {
        this.$eventHub.$emit(this.$eventTypes.ModalAdvanceQuery);
      },
      openModalQueryBuilder() {
        this.$eventHub.$emit(this.$eventTypes.ModalBuilderQuery);
      }
    }
  }
</script>

<style scoped lang="scss">
  .form_search {
    .btn {
      color: red;
    }
  }
</style>
