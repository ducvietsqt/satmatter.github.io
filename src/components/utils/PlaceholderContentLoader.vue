<template>
  <div :class="{loading: searching}" class="hadFound">
    <content-loader
      :height="160"
      :width="400"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb">
      <circle cx="10" cy="20" r="8"/>
      <rect x="25" y="15" rx="5" ry="5" width="220" height="10"/>
      <circle cx="10" cy="50" r="8"/>
      <rect x="25" y="45" rx="5" ry="5" width="220" height="10"/>
      <circle cx="10" cy="80" r="8"/>
      <rect x="25" y="75" rx="5" ry="5" width="220" height="10"/>
      <circle cx="10" cy="110" r="8"/>
      <rect x="25" y="105" rx="5" ry="5" width="220" height="10"/>
    </content-loader>
  </div>
</template>

<script>
  import {ContentLoader} from "vue-content-loader"

  export default {
    name: "PlaceholderContentLoader",
    components: {
      ContentLoader
    },
    data() {
      return {
        searching: false
      }
    },
    created() {
      this.$eventHub.$on(this.$eventTypes.searching, (searching) => {
        this.searching = searching;
      })
    }
  }
</script>

<style scoped lang="scss">
  .hadFound {
    /*position: absolute;*/
    top: 0px;
    left: 0px;
    /*border: solid 1px blue;*/
    max-height: 0vh;
    overflow: hidden;
    transition: all 0.15s linear;
    &.loading {
      /*border: solid 1px red;*/
      max-height: 100vh;
    }
  }
</style>
