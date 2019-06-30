<template>
    <v-card class="card_shadow mb-4" max-width="100%" transition="slide-y-reverse-transition">
      <v-card-title primary-title>
        <v-layout align-center>
          <!--<v-flex xs1 shrink>
            <v-avatar color="indigo" :size="45">
              <v-icon dark>account_circle</v-icon>
            </v-avatar>
          </v-flex>-->
          <v-flex xs12 grow px-3 class="">
            <h3 class="_title ma-0 mb-1 text-no-wrap ellipsis">
              <text-highlighter :queries="queries">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut commodi culpa eligendi et,
                exercitationem laudantium modi nisi pariatur quibusdam quod ut, voluptate voluptatum. A eum molestiae
                reiciendis repudiandae voluptatibus?
              </text-highlighter>

            </h3>
            <p class="body_1 ma-0 mb-1 v-list--two-line">
              <text-highlighter :queries="queries">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut commodi culpa eligendi et,
                exercitationem laudantium modi nisi pariatur quibusdam quod ut, voluptate voluptatum. A eum molestiae
                reiciendis repudiandae voluptatibus?
              </text-highlighter>
            </p>
            <p class="body_2 ma-0">
              Last updated 45 minutes ago
            </p>
          </v-flex>
        </v-layout>
      </v-card-title>
    </v-card>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: "CardResultItem",
    data() {
      return {
        ls: ''
      }
    },
    computed: {
      ...mapGetters("search", ["query"]),
      queries() {
        if (this.query) return this.query.split(' ');
        return ['a']
      }
    }
  }
</script>

<style scoped lang="scss">
  .card_shadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 4px 20px rgba(0, 0, 0, 0.07);
    ._title {
      color: #3257ec;
      color: #6d42c7;
      font-size: 16px;
    }
    .body_1 {
      color: #6c7987;
      /*font-size: .875em;*/
    }
    .body_2 {
      color: #A5B4C4;
    }
  }
</style>
