<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen scrollable transition="dialog-bottom-transition" class="fill-height">
      <v-card class="fill-height">
        <v-card-text class="fill-height">
          <v-container>
            <v-layout>
              <v-flex xs12 sm6>
                <TreeSchemeByCategory title="Appeals"
                                      :list="listCategoryScheme"/>
              </v-flex>
              <v-flex xs12 sm6>
                <TreeSchemeByCategory title="Jurisdiction"
                                      :list="listDistrict"/>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-container class="mt-auto py-0">
            <v-divider></v-divider>
            <v-card-actions class="px-0">
              <v-spacer></v-spacer>
              <v-btn class="" flat color="grey" @click="dialog = false">Cancel</v-btn>
              <v-btn class="text-capitalize mr-0" color="primary">Apply Jurisdic</v-btn>
            </v-card-actions>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

</template>

<script>
  import TreeSchemeByCategory from "./TreeSchemeByCategory";
  import CheckListItem from "./CheckListItem";
  import {listCategoryScheme, listDistrict} from "./schemeCategoryList";

  export default {
    name: "DialogSearchJurisdiction",
    components: {CheckListItem, TreeSchemeByCategory}, // eslint-disable-line
    data() {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        listCategoryScheme, listDistrict
      }
    },
    created() {
      this.$eventHub.$on(this.$eventTypes.ModalAdvanceQuery, () => {
        this.dialog = true
      })
    }
  }
</script>

<style scoped>

</style>
