<template>
  <v-layout
    wrap
    style="height: 200px;">
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right>
      <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" :gradient="message.gradient">
        <v-layout px-3 py-4 column fill-height class="lightbox white--text">
          <v-btn icon dark class="btn_close mt-4" @click="drawer = false">
            <v-icon>keyboard_arrow_right</v-icon>
          </v-btn>
          <v-flex shrink mb-4>
            <v-avatar size="56px">
              <img
                v-if="message.avatar"
                :src="message.avatar"
                alt="Avatar">
              <v-icon
                v-else
                :color="message.color"
                v-text="message.icon"
              ></v-icon>
            </v-avatar>
            <div class="subheading">
              <strong>Jonathan Lee</strong>
            </div>
            <!--<div class="body-1">heyfromjonathan@gmail.com</div>-->
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex>
            <p flat small light class="text-capitalize white--text d-flex align-center ma-0 mb-2 px-0 body-1">
              <v-icon left color="white" style="flex: unset !important;">person</v-icon>
              <span>Profile & Account Setting</span>
            </p>
            <p flat small light class="text-capitalize d-flex align-center white--text ma-0 px-0 body-1">
              <v-icon left color="white" style="flex: unset !important;">notifications_active</v-icon>
              <span>Notification Preferences</span>
            </p>
          </v-flex>
        </v-layout>
      </v-img>

      <v-list>
        <template v-for="(item, i) in items">
          <v-divider v-if="item.divider" :key="i"></v-divider>
          <v-list-tile v-else :key="item.title">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
  export default {
    name: "DrawerMyAccount",
    data() {
      return {
        drawer: null,
        width: 300,
        items: [
          {icon: 'bookmark', title: 'My bookmarks'},
          {icon: 'speaker_notes', title: 'My annotation'},
          {icon: 'history', title: 'My search history'},
          {divider: true},
          {icon: 'lock', title: 'Privacy policy'},
          {icon: 'mail', title: 'Terms and conditions'},
        ],
        message: {
          avatar: 'https://qualienquan.live/assets/img/skins/305192_solid_82a4a26d-5193_Annette_icon_bust_CAB-5193_Annette_icon_bust.assets-15012889.png',
          color: 'primary',
          icon: 'user',
          gradient: 'to top, #7B1FA2, #6d42c7'
        }
      }
    },
    created() {
      this.$eventHub.$on(this.$eventTypes.DrawerMyAccount, () => {
        this.drawer = !this.drawer;
      })
    }
  }
</script>

<style scoped>
  .btn_close {
    position: absolute;
    right: 0px;
    top: 0px;
    background: rgba(255,255,255,0.1);
  }
</style>
