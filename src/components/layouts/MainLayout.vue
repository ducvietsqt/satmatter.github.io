<template>
  <v-app :dark="isDark" class="bg_app">
    <Determinate/>
    <v-toolbar app
               color="primary"
               dark
               :clipped-left="$vuetify.breakpoint.mdAndUp"
               :clipped-right="$vuetify.breakpoint.mdAndUp"
               fixed>
      <v-toolbar-title class="ml-0 pl-0 mr-3 layout align-center">
        <v-avatar :size="30" @click.stop="drawer = !drawer" class="pointer_cusor">
          <img src="../../assets/logo_thumb.png" alt="avatar">
        </v-avatar>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <v-btn icon :href="source" target="_blank" slot="activator">
          <v-switch v-model="isDark"></v-switch>
        </v-btn>
        <span>{{isDark ? 'Bright' : 'Dark'}}</span>
      </v-tooltip>
      <MenuAvatarProfile @clickMenuAvatarProfile="clickMenuAvatarProfile"/>
    </v-toolbar>
    <v-content>
      <slot/>
    </v-content>
    <!--Component include-->
    <Profile :dialog="dialogProfile"
             @toggleModal="toggleModal"/>
    <Settings :dialog="dialogSettings"
              @toggleModal="toggleModal"/>
    <ProfileUserDrawer/>
    <DrawerMyAccount/>
    <Snack/>
  </v-app>
</template>

<script>
  import Profile from './Profile';
  import Settings from './Settings';
  import Determinate from "../utils/Determinate";
  import Snack from "sat-prj/src/donga/components/utils/Snack";
  import MenuAvatarProfile from "../auth/MenuAvatarProfile";
  import ProfileUserDrawer from "../user/ProfileUserDrawer";
  import DrawerMyAccount from "../DrawerMyAccount";

  const DIALOG_TYPE = {
    'PROFILE': 'PROFILE',
    'SETTINGS': 'SETTINGS',
  };
  export default {
    name: "MainLayout",
    components: {
      DrawerMyAccount,
      ProfileUserDrawer, MenuAvatarProfile, Snack, Determinate, Profile, Settings
    },
    data() {
      return {
        // theme
        isDark: false,

        // drawer navigation
        drawer: null,
        mini: true,

        // menu sidebar
        items: [
          {icon: 'home', text: 'Home'},
          {
            icon: 'folder',
            'icon-alt': 'folder',
            text: 'Project',
            mode: true,
            submenu: true,
            children: [
              {icon: '', text: 'Satproj'},
              {icon: '', text: 'Sathrproj'},
            ]
          },
          {icon: 'public', text: 'Everything'},

          {icon: 'settings', text: 'Settings', type: DIALOG_TYPE.SETTINGS},
          {icon: 'chat_bubble', text: 'Feedback'},
          {icon: 'help', text: 'Help'},
        ],
        // menu
        fav: true,
        menu: false,
        message: true,
        hints: true,

        // source
        source: '',

        // profile
        dialogSettings: false,
        dialogProfile: false,
        dialogProfileUserDrawer: false

      };
    },
    created() {

    },
    computed: {
      toggleDialogProfileUserDrawer() {
        return this.dialogProfileUserDrawer
      }
    },
    methods: {
      toggleModal(type) {
        switch (type) {
          case DIALOG_TYPE.PROFILE:
            this.dialogProfile = !this.dialogProfile;
            break;
          case DIALOG_TYPE.SETTINGS:
            this.dialogSettings = !this.dialogSettings;
            break;
          default:
            break;
        }
      },
      clickMenuAvatarProfile() {

      },
      openModalOnBoard() {
        this.$eventHub.$emit(this.$eventTypes.ModalOnBoard, true);
      }
    }
  }
</script>

<style>
  .bg_app {
    background: url("../../assets/dashboard.jpg") no-repeat top center;
    background-size: cover;
    background-attachment: fixed;
    background: #f6f6f6;
  }

  .v-card {

  }

  .fixed_line {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
  }
</style>
