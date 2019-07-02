<template>
  <v-daterange v-model="range"
               display-format="DD-MM-YYYY"
               no-title
               :input-props="inputProps"
               :menu-props="menuProps"
               :presets="presets">
    <h3 slot="title">Dater Range Picker - Next</h3>
  </v-daterange>
</template>

<script>
  import {format, subDays} from 'date-fns';

  export default {
    name: "DateRangePicker",
    data() {
      return {
        dateMenu: false,

        range: {},
        inputProps: {solo: true, style: {width: '100%', 'font-size': '14px'}, 'hide-details': true},
        menuProps: {offsetY: true, closeOnContentClick: false, 'full-width': true},
        presets: [
          {
            label: 'Today',
            range: [
              format(new Date(), 'YYYY-MM-DD'),
              format(new Date(), 'YYYY-MM-DD')
            ]
          },
          {
            label: 'Yesterday',
            range: [
              format(subDays(new Date(), 1), 'YYYY-MM-DD'),
              format(subDays(new Date(), 1), 'YYYY-MM-DD')
            ]
          },
          {
            label: 'Last 30 Days',
            range: [
              format(subDays(new Date(), 30), 'YYYY-MM-DD'),
              format(subDays(new Date(), 1), 'YYYY-MM-DD')
            ]
          }
        ]
      }
    },
    methods: {
      onDateRangeChange(range) {
        this.range = range;
      },
    }
  }
</script>

<style scoped>

</style>
