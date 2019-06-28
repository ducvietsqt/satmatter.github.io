<template>
  <div>
    <v-toolbar class="nav_dashboard"
               color="primary"
               dark
               :clipped-left="$vuetify.breakpoint.mdAndUp"
               :clipped-right="$vuetify.breakpoint.mdAndUp"
               app flat>
      <v-toolbar-title style="width: 276px" class="ml-0">
        <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
        <span class="hidden-sm-and-down text-uppercase">Satlegal.io</span>
        <!--Satlegal.io-->
      </v-toolbar-title>
      <!--<v-spacer></v-spacer>-->
      <FormSearchPage/>
      <BtnAdvanceQueryBuilder/>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>code</v-icon>
          </v-btn>
        </template>
        <span>Statute</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>history</v-icon>
          </v-btn>
        </template>
        <span>History</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>help_outline</v-icon>
          </v-btn>
        </template>
        <span>Help</span>
      </v-tooltip>
      <AvatarAccount/>
    </v-toolbar>

    <DrawerLeftSearch/>
    <DrawerRightSearch/>

    <v-container>
      <v-layout row justify-start class="fill-height">
        <v-flex xs12>
          <CardResultItem/>
        </v-flex>
      </v-layout>
      <DialogSearchJurisdiction/>
      <DialogSearchQueryBuilder/>
    </v-container>
  </div>
</template>

<script>
  import FormSearchPage from "../../components/FormSearchPage";
  import DialogSearchJurisdiction from "../../components/DialogSearchJurisdiction";
  import AvatarAccount from "../../components/AvatarAccount";
  import DialogSearchQueryBuilder from "../../components/DialogSearchQueryBuilder";
  import BtnAdvanceQueryBuilder from "../../BtnAdvanceQueryBuilder";
  import DrawerLeftSearch from "../../components/DrawerLeftSearch";
  import CardResultItem from "../../components/CardResultItem";
  import DrawerRightSearch from "../../components/DrawerRightSearch";

  export default {
    name: "DashBoard",
    components: {
      DrawerRightSearch,
      CardResultItem,
      DrawerLeftSearch,
      BtnAdvanceQueryBuilder,
      DialogSearchQueryBuilder, AvatarAccount, DialogSearchJurisdiction, FormSearchPage},
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
