<template>
  <v-form>
    <v-text-field
      flat
      solo-inverted
      append-icon="location_on"
      clear-icon="close"
      clearable
      prepend-inner-icon="search"
      label="Search matter, ..."
      hide-details
      class="hidden-sm-and-down"
      style="border-radius: 0px; background: rgba(255,255,255,0.1); width: 450px;"
      @click:append="toggleModalJur" @input="onSearch">
    </v-text-field>
  </v-form>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: "FormSearchPage",
    data() {
      return {
        filterKey: ''
      }
    },
    methods: {
      toggleModalJur() {
        this.$eventHub.$emit(this.$eventTypes.ModalAdvanceQuery);
      },
      onSearch: _.debounce(function (value) {
        this.filterKey = value
      }, 2000)
    }
  }
</script>

<style scoped lang="scss">

</style>
