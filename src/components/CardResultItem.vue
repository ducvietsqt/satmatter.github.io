<template>
  <v-card class="card_shadow mb-4" max-width="100%" transition="slide-y-reverse-transition">
    <v-card-title primary-title>
      <v-layout align-center>
        <v-flex xs12 grow px-3 class="">
          <h3 class="_title ma-0 mb-1 text-no-wrap ellipsis">
            <router-link to="/detail/1" style="text-decoration: none;">
              <text-highlighter :queries="queries">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut commodi culpa eligendi et,
                exercitationem laudantium modi nisi pariatur quibusdam quod ut, voluptate voluptatum. A eum molestiae
                reiciendis repudiandae voluptatibus?
              </text-highlighter>
            </router-link>

          </h3>
          <p class="body_1 ma-0 mb-3 v-list--two-line">
            <text-highlighter :queries="queries">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut commodi culpa eligendi et,
              exercitationem laudantium modi nisi pariatur quibusdam quod ut, voluptate voluptatum. A eum molestiae
              reiciendis repudiandae voluptatibus?
            </text-highlighter>
          </p>
          <p class="body_2 ma-0 mb-3">
            558 U.S.310 (2010) Cited 1,0768 times56 Legal Analyses
          </p>
          <div>
            <v-chip label outline color="primary">
              <v-avatar>
                <v-icon>account_circle</v-icon>
              </v-avatar>
              <text-highlighter :queries="queries">Motion for summary judgment</text-highlighter>

            </v-chip>
            <v-chip label outline color="primary">
              <v-avatar>
                <v-icon>insert_drive_file</v-icon>
              </v-avatar>
              <text-highlighter :queries="queries">Motion to dismiss</text-highlighter>

            </v-chip>
            <v-chip label outline color="primary">
              <v-avatar>
                <v-icon>info</v-icon>
              </v-avatar>
              <text-highlighter :queries="queries">Con. Law - Other</text-highlighter>

            </v-chip>
            <v-chip label outline color="primary">
              <v-avatar>
                <v-icon>label</v-icon>
              </v-avatar>
              <text-highlighter :queries="queries">Contract - Other</text-highlighter>

            </v-chip>
          </div>
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
