<template>
  <SignIn v-if="!$store.getters['auth/isLoggedIn']"/>
</template>

<script>
  import SignIn from "./auth/SignIn";
  import {getSubdomain, isValidSubdomain} from "../utils/index";

  export default {
    name: "Index",
    components: {SignIn},
    mounted() {
      let subdomain = getSubdomain(location.hostname);
      if (isValidSubdomain(subdomain) && !this.$store.getters["auth/isLoggedIn"]) {
        this.$router.replace({name: "signin"});
      }
    }
  };
</script>
