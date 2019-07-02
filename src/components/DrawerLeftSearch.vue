<template>
  <v-navigation-drawer
    fixed
    :clipped="$vuetify.breakpoint.mdAndUp"
    app
    left
    v-model="drawer"
    width="300px"
    style="z-index: 1">


    <v-list dense expand class="pa-3">
      <template v-for="(item, idx) in items">
        <v-list-group v-model="item.model"
                      :key="idx" class="mb-3">
          <v-list-tile slot="activator" style="border-left: solid 3px #6d42c7">
            <v-list-tile-content>
              <v-list-tile-title class="text-uppercase font-weight-bold">
                {{ item.name }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="(child, i) in item.children"
                       :key="i">
            <v-checkbox :label="child.name" value="John" class="black--text headline">
              <template v-slot:label>
                <span style="font-weight: 500; font-size: 13px;">{{child.name}}</span>
              </template>
            </v-checkbox>
          </v-list-tile>
        </v-list-group>
      </template>
      <v-list-group v-model="openDate" style="background: #f4f5f7" class="mb-3">
        <v-list-tile slot="activator" style="border-left: solid 3px #6d42c7">
          <v-list-tile-content>
            <v-list-tile-title class="text-uppercase font-weight-bold">
              Date
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="py-3">
          <v-list-tile-content>
            <div class="py-3" style="width: 100%">
              <DateRangePicker/>
            </div>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import {listDistrict} from "./schemeCategoryList";
  import DateRangePicker from "./DateRangePicker";

  export default {
    name: "DrawerLeftSearch",
    components: {DateRangePicker},
    data: () => ({
      dialog: false,
      drawer: null,
      openDate: true,
      items: [
        // {heading: 'Filters'},
        // {icon: 'contacts', name: 'Contacts'},
        // {icon: 'history', name: 'Frequently contacted'},
        // {icon: 'content_copy', name: 'Duplicates'},
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          name: 'Jurisdiction',
          model: true,
          children: [
            ...listDistrict
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          name: 'statutes and regulations',
          model: true,
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          name: 'Nature of Suit',
          model: true,
        },


        /*{
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          name: 'Jurisdiction',
          model: true,
          children: [
            {icon: 'add', name: 'Lorem ispum'},
            {icon: 'add', name: 'sit met'},
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          name: 'Statutes and Regulations',
          model: true,
          children: [
            {icon: 'add', name: 'Create label'}
          ]
        },

        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          name: 'More',
          model: false,
          children: [
            {name: 'Import'},
            {name: 'Export'},
            {name: 'Print'},
            {name: 'Undo changes'},
            {name: 'Other contacts'}
          ]
        },*/
        // {icon: 'settings', name: 'Settings'},
        // {icon: 'chat_bubble', name: 'Send feedback'},
        // {icon: 'help', name: 'Help'},
        // {icon: 'phonelink', name: 'App downloads'},
        // {icon: 'keyboard', name: 'Go to the old version'}
      ],
    }),
    props: {
      source: String
    }
  }
</script>

<style scoped>

</style>
