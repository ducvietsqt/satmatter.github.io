<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Advance query search</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md pa-0>
            <v-layout wrap>
              <v-flex xs12>
                <QueryBuilderCondition/>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import QueryBuilderCondition from "./QueryBuilderCondition";
  export default {
    name: "DialogSearchQueryBuilder",
    components: {QueryBuilderCondition},
    data: () => ({
      dialog: false
    }),
    created() {
      this.$eventHub.$on(this.$eventTypes.ModalBuilderQuery, () => {
        this.dialog = true;
      })
    }
  }
</script>

<style scoped>

</style>
