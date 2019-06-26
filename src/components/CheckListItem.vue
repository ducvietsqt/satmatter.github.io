<template>
  <v-card>
    <v-list :expand="true">
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action>
        <template v-slot:activator>
          <v-checkbox label="John" value="John"></v-checkbox>
          <!--<v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>-->
        </template>

        <v-list-tile
          v-for="subItem in item.items"
          :key="subItem.title">
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: "CheckListItem",
    data() {
      return {
        items: [
          {
            action: 'local_activity',
            title: 'Attractions',
            active: true,
            items: [
              {title: 'List Item'}
            ]
          },
          {
            action: 'restaurant',
            title: 'Dining',
            active: true,
            items: [
              {title: 'Breakfast & brunch'},
              {title: 'New American'},
              {title: 'Sushi'}
            ]
          },
          {
            action: 'school',
            title: 'Education',
            items: [
              {title: 'List Item'}
            ]
          },
          {
            action: 'directions_run',
            title: 'Family',
            items: [
              {title: 'List Item'}
            ]
          },
          {
            action: 'healing',
            title: 'Health',
            items: [
              {title: 'List Item'}
            ]
          },
          {
            action: 'content_cut',
            title: 'Office',
            items: [
              {title: 'List Item'}
            ]
          },
          {
            action: 'local_offer',
            title: 'Promotions',
            items: [
              {title: 'List Item'}
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
