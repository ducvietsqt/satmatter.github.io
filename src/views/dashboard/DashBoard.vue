<template>
  <div>
    <v-toolbar class="nav_dashboard"
               color="primary"
               dark
               extended app flat>
      <p class="ma-0">
        <strong>13 days Left</strong> <br/> in your free trial
      </p>
      <v-spacer></v-spacer>
      <p class="ma-0">
        30% off for life: Under $50 if you subscribe before Friday 6/28.
      </p>
      <v-spacer></v-spacer>
      <v-btn flat outline class="text-capitalize">Schedule a Demo</v-btn>
      <v-btn light class="text-capitalize">Subscribe now</v-btn>
      <template v-slot:extension>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon light v-on="on">
              <v-icon>code</v-icon>
            </v-btn>
          </template>
          <span>Statute</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon light v-on="on">
              <v-icon>history</v-icon>
            </v-btn>
          </template>
          <span>History</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon light v-on="on">
              <v-icon>help_outline</v-icon>
            </v-btn>
          </template>
          <span>Help</span>
        </v-tooltip>
        <AvatarAccount/>
      </template>

    </v-toolbar>
    <v-container>
      <v-layout row justify-start class="fill-height">
        <v-flex>
          <FormSearchPage/>
        </v-flex>
      </v-layout>
      <DialogSearchJurisdiction/>
      <DialogSearchQueryBuilder/>
    </v-container>

    <v-footer app height="auto" flat>
      <v-container fluid class="py-0">
        <v-layout
          justify-end
          row
          wrap>
          <router-link
            v-for="link in ['Matter','Company','Privacy', 'Policy']"
            :key="link"
            flat to="#"
            round class="text-capitalize subheading grey--text ml-3 text-underline-none">
            {{ link }}
          </router-link>
        </v-layout>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
  import FormSearchPage from "../../components/FormSearchPage";
  import DialogSearchJurisdiction from "../../components/DialogSearchJurisdiction";
  import AvatarAccount from "../../components/AvatarAccount";
  import DialogSearchQueryBuilder from "../../components/DialogSearchQueryBuilder";

  export default {
    name: "DashBoard",
    components: {DialogSearchQueryBuilder, AvatarAccount, DialogSearchJurisdiction, FormSearchPage},
    metaInfo: {
      title: "Dash Board"
    },
    data() {
      return {
        avatar: "",
        isLetGetStarted: true
      }
    },
    created() {

    },
    mounted() {
      // this.$eventHub.$emit(this.$eventTypes.ModalOnBoard, true);
    },
    computed: {},
  }
</script>

<style lang="scss">
  .nav_dashboard {
    .v-toolbar__extension {
      background: #fff;
      color: #000;
    }
  }
  .text-underline-none {
    text-decoration: none;
  }

</style>
