<template>
  <div class="flex">
    <v-layout row justify-start class="fill-height">
      <div class="flex">
        <div>
          DashBoard
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: "DashBoard",

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
    computed: {

    },
  }
</script>

<style scoped>

</style>
