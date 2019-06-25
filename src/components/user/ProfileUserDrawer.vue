<template>
  <v-navigation-drawer fixed app right temporary
                       v-model="drawer"
                       :clipped="$vuetify.breakpoint.mdAndUp">
    <div class="layout column fill-height justify-space-between">
      <v-toolbar flat>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="subheading">{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card class="flex pt-3" flat>
        <v-card-text class="pt-0 text-xs-center fill-height">
          <FormProfileUser/>
        </v-card-text>
      </v-card>
    </div>
  </v-navigation-drawer>
</template>
<script>
  import FormProfileUser from "./FormProfileUser";

  export default {
    name: "ProfileUserDrawer",
    components: {FormProfileUser},
    data: () => ({
      title: "Profile",

      drawer: false
    }),
    created() {
      this.$eventHub.$on(this.$eventTypes.profileUserDrawer, () => {
        this.drawer = true;
      })
    },
    methods: {}
  }
</script>

<style scoped>

</style>
