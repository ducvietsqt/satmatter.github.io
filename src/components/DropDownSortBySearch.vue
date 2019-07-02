<template>
  <div class="text-xs-center">
    <v-menu
      transition="slide-y-transition"
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn class="text-capitalize body-1"
               color="primary"
               dark
               outline
               flat
               dense
               v-on="on">
          Sort By {{activeSort}} <v-icon>arrow_drop_down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, i) in ['Bookmarks', 'Cited by', 'Highlights']"
          :key="i" @click="activeSort = item">

          <v-list-tile-action>
            <v-icon v-if="activeSort === item" color="green">check</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item}}</v-list-tile-title>
          </v-list-tile-content>

          <!--<v-list-tile-title>
            <v-icon v-if="activeSort === item">check</v-icon>
            {{ item }}
          </v-list-tile-title>-->

        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
  export default {
    name: "DropDownSortBySearch",
    data() {
      return {
        activeSort: 'Cited by'
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  .chosen-custom.v-text-field--box .v-input__slot, .v-text-field--outline .v-input__slot {
    min-height: 40px !important;
  }

  .chosen-custom.v-text-field .v-input__append-inner {
    margin-top: 10px;
  }
</style>
