<template>
  <v-navigation-drawer
    fixed
    :clipped="$vuetify.breakpoint.mdAndUp"
    app
    right
    :v-model="true"
    width="200px"
    style="z-index: 1">
    <v-list dense>
      <v-subheader>
        Right filter
      </v-subheader>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
    export default {
        name: "DrawerRightSearch",

    }
</script>

<style scoped>

</style>
