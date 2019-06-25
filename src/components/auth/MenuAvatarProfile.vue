<template>
  <!--MENU-->
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    open-on-hover
    bottom
    :offset-y="true"
  >
    <template v-slot:activator="{ on }">
      <v-avatar class="ml-3" :size="30" color="pink">
        <img :src="getAvatar" v-if="getAvatar"
          alt="John"
          v-on="on"
        >
        <span v-else v-on="on" class="white--text headline">{{getUsername | chartFirst}}</span>
      </v-avatar>

    </template>
    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar color="pink">
            <img v-if="getAvatar" :src="getAvatar" alt="John">
            <span v-else class="white--text headline">{{getName | chartFirst}}</span>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{getName}}</v-list-tile-title>
            <v-list-tile-sub-title>{{getUsername}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile @click="openProfileDrawer">
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Profile
          </v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>vpn_key</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Change password</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>My preferences</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="signOut">
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Log out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  export default {
    name: "MenuAvatarProfile",
    data() {
      return {
        menu: false,
        message: false
      }
    },
    computed: {
      ...mapGetters("user", ["getFirstName", "getLastName", "getUsername","getName", "getAvatar"]),
    },
    methods: {
      ...mapActions("auth", ["logout"]),
      signOut() {
        this.logout().then(() => {
          this.$router.replace({path: "/signin"})
        })
      },
      openProfileDrawer() {
        this.$eventHub.$emit(this.$eventTypes.profileUserDrawer);
      }
    },
    filters: {
      chartFirst(title) {
        if(!title) return 'S';
        return title.charAt(0).toUpperCase();
      }
    }
  }
</script>

<style scoped>

</style>
