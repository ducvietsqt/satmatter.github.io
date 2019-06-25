<template>
  <LogIn v-if="isSubdomain"
         :workspace="workspace"/>
  <div v-else class="layout align-center fill-height">
    <v-form ref="form" @submit.prevent="submit" lazy-validation class="form_auth">
      <h4 class="auth-header mb-4 font-weight-bold text-primary headline text-xs-left">Sign in to your workspace</h4>
      <v-layout align-center>
        <v-text-field name="login"
                      class="child-flex"
                      label="Enter your workspace URL"
                      type="text"
                      autofocus
                      outline
                      v-model="subdomain">
        </v-text-field>
        <label class="title font-weight-bold ml-1">
          .satlegal.io
        </label>
      </v-layout>
      <div class="px-0">
        <v-btn color="primary" class="ml-0"
               @click="submit"
               :loading="submitting"
               :disabled="submitting || !subdomain"
               :class="{ red: !valid, green: valid }">
          Continue
          <v-icon right dark>arrow_forward</v-icon>
        </v-btn>
        <div class="subheading mt-3">
          Or, <router-link class="link_bt" :to="{ name: 'createworkspace' }">Create a new workspace?</router-link>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
  import LogIn from '../../components/auth/Login'
  import {setSubdomains} from "../../store/modules/auth";
  import {getSubdomain, getSubdomainURL, isValidSubdomain} from "../../utils/index";

  export default {
    name: "SignInWorkSpace",
    components: {LogIn},
    metaInfo: {
      title: "Sign In"
    },
    data() {
      let _subdomain = getSubdomain(location.hostname);
      return {
        showLoginForm: false,
        subdomain: _subdomain,
        isSubdomain: isValidSubdomain(_subdomain),
        subdomainRules: [
          (v) => !!v || 'Name is required',
          (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
        ],
        submitting: false,
        formError: "",
        valid: false,

        workspace: {}
      }
    },
    created() {
      if (this.subdomain) {
        this.getWorkspace(this.subdomain);
      }
    },
    methods: {
      getWorkspace(subdomain) {
        this.submitting = true;
        this.formError = "";
        this.$http.get(`/api/workspaces/${subdomain}/check/`)
          .then(response => {
            if (response.data.name) {
              if (this.isSubdomain) {
                this.workspace = response.data;
                this.showLoginForm = true;
              } else {
                setSubdomains(this.subdomain);
                location.href = getSubdomainURL(this.subdomain);
              }
            } else {
              this.$eventHub.$emit(this.$eventTypes.snackNotify, "Couldn't find your workspace");
            }
          })
          .catch(error => {
            // this.submitting = false;
            throw error
          })
          .finally(() => {
            this.submitting = false;
          });
      },
      submit() {
        // return alert(1);
        if (!this.subdomain) {
          this.$eventHub.$emit(this.$eventTypes.snackNotify, "Please enter your workspace");
        } else {
          this.getWorkspace(this.subdomain);
        }
      }
    }
  }
</script>

<style>
  .flex_label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex_label ._title {
    flex: 1;
  }

  .flex_label ._icon {

  }

  .title-small {
  }

  .v-text-field__suffix {
    font-weight: bold !important;
  }
</style>
