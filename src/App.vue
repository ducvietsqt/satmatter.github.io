<template>
  <div @click="appClick">
    <component :is="layout">
      <router-view v-if="isValidDomain"/>
    </component>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import {getSubdomain, isValidSubdomain, SESSION, setSESSION} from "./utils";
  // LoggedIn | NotLoggedIn
  const DefaultLayout = "LoggedIn";
  // const DefaultLayout = "NotLoggedIn";
  let isAuthenticated = false;

  export default {
    name: "App",
    created() {
      // TODO: check authenticated
      // if(!isAuthenticated) return this.$router.replace({ name: "resultDetail" });
      if(!isAuthenticated) return this.$router.replace({ name: "dashBoard" });
      // TODO: else
      if(this.$route.query.token) {
        setSESSION(SESSION.TOKEN, this.$route.query.token)
      }
      if (process.env.NODE_ENV !== "production") {
        let routes = [];
        this.$router.options.routes.forEach(route => {
          let {path, name} = route;
          if (path !== "*") {
            if (!name) {
              return alert(`Rout ${path} must have a name`);
            }
            routes.push({path, name});
          }
        });
        if (routes.length) {
          this.$http
            .post("/sync-routes", routes)
            .catch(() => {
            });
        }
      }
      this.$http.interceptors.response.use(undefined, err => {
        return new Promise(() => {
          if (
            err.response.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            this.$store.dispatch("auth/logout").then(() => {
              this.$router.push({
                path: "/signin",
                query: {redirect: this.$route.fullPath}
              });
            });
          }
          throw err;
        });
      });

      if (this.$store.state.auth.token && !this.$store.state.auth.user.pk && isValidSubdomain(getSubdomain(location.hostname))) {
        this.$store
          .dispatch("auth/getUser")
          .then(data => {
            this.setCurrentUser(data);
            let subdomain = getSubdomain(location.hostname);
            if(this.$route.name !== "inviteMembers") {
              if(this.$router.currentRoute.meta.layout === "NotLoggedIn") {
                this.$router.replace({ name: "dashBoard" });
              }
            }
            if (subdomain) {
              for (let i = 0; i < data.companies.length; i++) {
                if (data.companies[i].subdomain === subdomain) {
                  this.$store
                    .dispatch("company/loadCompany", data.companies[i].pk)
                    .catch(() => {

                    });
                  break;
                }
              }
            }
          }).catch(() => {

          });
      }else if(this.$route.name !== "password_reset_confirm" && this.$route.name !== "createproject"){
        // TODO: when remove token
        // this.$router.replace({ name: "index" });
        this.$router.replace({ name: "signin" });
      }
    },
    computed: {
      layout() {
        return this.$route.meta.layout || DefaultLayout;
      },
      isValidDomain() {
        let subdomain = getSubdomain(location.hostname);
        return !subdomain || isValidSubdomain(subdomain);
      },
      isAuthenticated() {
        return isAuthenticated;
      }

    },
    methods: {
      ...mapMutations("user", ["setCurrentUser"]),
      appClick(e) {
        this.$eventHub.$emit(this.$eventTypes.appClick, e);
      }
    }
  };
</script>
<style>
  .application {
    /*font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif !important;*/
    /*line-height: 1.5;*/
  }
</style>
