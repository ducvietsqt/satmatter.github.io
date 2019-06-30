<template>
  <v-navigation-drawer
    fixed
    :clipped="$vuetify.breakpoint.mdAndUp"
    app
    right
    :v-model="true"
    width="200px"
    style="z-index: 1">
    <v-list dense class="fill-height">
      <v-layout column class="fill-height">
        <v-flex class="fill-height">
          <v-card flat>
            <v-card-text>
              <router-link to="#" class="_title_right subheading mb-3">
                <v-icon color="primary" class="icon">bookmark</v-icon>
                <span><b>233</b> Bookmark</span>
              </router-link>
              <router-link to="#" class="_title_right subheading mb-3">
                <v-icon color="primary" class="icon">format_quote</v-icon>
                <span><b>233</b> Cited By</span>
              </router-link>
              <router-link to="#" class="_title_right subheading">
                <v-icon color="primary" class="icon">highlight</v-icon>
                <span><b>233</b> Highlights</span>
              </router-link>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-divider></v-divider>
        <v-flex class="mt-auto">
          <v-card flat>
            <v-card-text class="">
              <v-btn icon color="primary">
                <v-icon>bookmarks</v-icon>
              </v-btn>
              <v-btn icon color="primary">
                <v-icon>share</v-icon>
              </v-btn>
              <v-btn icon color="primary">
                <v-icon>picture_as_pdf</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "DrawerRightSearch",

  }
</script>

<style scoped lang="scss">
  ._title_right {
    /*border: solid 1px red;*/
    display: flex;
    align-items: center;
    text-decoration: none;
    .icon {
      /*border: solid 1px blue;*/
      width: 20px;
    }
    span {
      display: block;
      flex: 1;
      font-size: 14px;
      padding-left: 16px;
      color: #000 !important;
    }
  }
</style>
