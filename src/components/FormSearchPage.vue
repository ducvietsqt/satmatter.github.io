<template>
  <v-form>
    <v-text-field
      flat
      solo-inverted
      append-icon="location_on"
      clear-icon="close"
      clearable
      prepend-inner-icon="search"
      label="Search matter ..."
      hide-details
      class="hidden-sm-and-down"
      style="border-radius: 0px; background: rgba(255,255,255,0.1); width: 450px;"
      @click:append="toggleModalJur"
      @input="onSearch">
    </v-text-field>
  </v-form>
</template>

<script>
  import _ from 'lodash';
  import {mapMutations} from 'vuex';
  export default {
    name: "FormSearchPage",
    data() {
      return {
        filterKey: ''
      }
    },
    methods: {
      ...mapMutations('search', ['setQuerySearch']),
      toggleModalJur() {
        this.$eventHub.$emit(this.$eventTypes.ModalAdvanceQuery);
      },
      timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },
      onSearch: _.debounce(async function (value) {
        this.filterKey = value;
        this.setQuerySearch(value);
        await this.$eventHub.$emit(this.$eventTypes.searching, true);
        await this.timeout(800);
        await this.$eventHub.$emit(this.$eventTypes.searching, false);
      }, 800)
    }
  }
</script>

<style scoped lang="scss">

</style>
