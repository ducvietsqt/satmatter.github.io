<template>
  <v-card class="card_shadow" :max-width="420">
    <v-card-title primary-title>
      <v-layout align-center>
        <v-flex xs1>
          <v-avatar color="indigo" :size="25">
            <v-icon dark>account_circle</v-icon>
          </v-avatar>
        </v-flex>
        <v-flex xs10 px-3 class="">
          <h3 class="_title ma-0 mb-1 text-no-wrap ellipsis">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut commodi culpa eligendi et,
            exercitationem laudantium modi nisi pariatur quibusdam quod ut, voluptate voluptatum. A eum molestiae
            reiciendis repudiandae voluptatibus?
          </h3>
          <p class="body_1 ma-0 mb-1 v-list--two-line">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur ex iure nemo obcaecati quos
            saepe. Aperiam consequuntur ea eaque expedita, ipsum magni molestias nisi omnis repellat soluta suscipit
            voluptatibus?
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
  export default {
    name: "CardResultItem"
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
