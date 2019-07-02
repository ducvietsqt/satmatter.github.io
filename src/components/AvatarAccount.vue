<template>
  <v-avatar color="teal" :size="30" @click="avatarClick">
    <span class="white--text">DV</span>
  </v-avatar>
</template>

<script>
  export default {
    name: "AvatarAccount",
    methods: {
      avatarClick() {
        this.$eventHub.$emit(this.$eventTypes.DrawerMyAccount);
      }
    }
  }
</script>

<style scoped>

</style>
