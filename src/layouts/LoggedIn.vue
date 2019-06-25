<template>
  <MainLayout>
    <router-view></router-view>
  </MainLayout>
</template>

<script>
  import MainLayout from "../components/layouts/MainLayout";
  export default {
    name: "LoggedIn",
    components: {
      MainLayout
    },
  }


</script>
