<template>
  <div class="form_search">
    <v-form>
      <v-text-field
        append-icon="location_on"
        box
        outline
        single-line
        clear-icon="close"
        label="Search"
        clearable
        hide-details
        type="text"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn depressed class="text-capitalize" color="primary">Search</v-btn>
        <v-btn depressed class="text-capitalize" color="primary">Advance query</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: "FormSearchPage"
  }
</script>

<style scoped lang="scss">
  .form_search {
    .btn {
      color: red;
    }
  }
</style>
