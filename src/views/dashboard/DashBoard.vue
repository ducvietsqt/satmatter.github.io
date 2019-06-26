<template>
  <div class="flex">
    <v-layout row justify-start class="fill-height">
      <div class="flex">
        <div>
          <FormSearchPage/>
        </div>
      </div>
    </v-layout>
    <DialogSearchAdvanceQuery/>
  </div>
</template>

<script>
  import FormSearchPage from "../../components/FormSearchPage";
  import DialogSearchAdvanceQuery from "../../components/DialogSearchAdvanceQuery";
  export default {
    name: "DashBoard",
    components: {DialogSearchAdvanceQuery, FormSearchPage},
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
    computed: {},
  }
</script>

<style scoped>

</style>
