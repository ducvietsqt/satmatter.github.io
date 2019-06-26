<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <!--<v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>-->
        <v-divider></v-divider>
        <v-container>
          <v-layout>
            <v-flex xs12 sm6>
              <TreeSchemeByCategory title="U.S. Courts of Appeals"
                                    :list="listCategoryScheme"/>
              <!--<CheckListItem/>-->
            </v-flex>
            <v-flex  xs12 sm6>
              <TreeSchemeByCategory title="District Jurisdiction"
                                    :list="listDistrict"/>
              <!--<CheckListItem/>-->
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

    </v-dialog>
  </v-layout>

</template>

<script>
  import TreeSchemeByCategory from "./TreeSchemeByCategory";
  import CheckListItem from "./CheckListItem";
  import {listCategoryScheme, listDistrict} from "./schemeCategoryList";

  export default {
    name: "DialogSearchAdvanceQuery",
    components: {CheckListItem, TreeSchemeByCategory}, // eslint-disable-line
    data() {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        listCategoryScheme, listDistrict
      }
    }
  }
</script>

<style scoped>

</style>
