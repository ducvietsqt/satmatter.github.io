<template>
  <div>
    <v-form @submit.prevent="submit" class="form_auth">
      <div class="headline font-weight-bold mb-3"
           :class="{'text-xs-left': status === statusTypes.VALID_LINK, 'text-xs-center': status !== statusTypes.VALID_LINK}">Password Reset</div>
      <template v-if="status === statusTypes.VALID_LINK">
        <v-text-field v-model="new_password1"
                      label="New Password"
                      type="password"
                      data-vv-name="new_password1"
                      data-vv-as="password"
                      outline
                      v-validate="'required'"
                      :error-messages="errors.collect('new_password1')"
                      ref="password"
                      required></v-text-field>
        <v-text-field v-model="new_password2"
                      label="Confirm New Password"
                      data-vv-name="new_password2"
                      data-vv-as="re-password"
                      type="password"
                      style="border-width: 1px;"
                      outline
                      v-validate="'required|confirmed:password'"
                      :error-messages="errors.collect('new_password2')"
                      required></v-text-field>
        <v-btn color="primary"
               @click="submit"
               :loading="submitting"
               block
               :disabled="submitting">
          Change My Password
        </v-btn>

      </template>
      <template v-else-if="status === statusTypes.INVALID_LINK">
        <v-card-title class="layout pt-0 pl-0 justify-center">
          <div class="headline text-xs-center subheading">
            Password reset links expire after 24 hours if unused, you can
            <router-link class="link_bt" to="/reset-password">request a new one</router-link>
          </div>
        </v-card-title>
      </template>
      <template v-else-if="status === statusTypes.SUCCESS">
        <v-card-title class="layout pt-0 pl-0 justify-center">
          <div class="headline text-xs-center subheading">
            Your password has been updated successfully.
            <a class="link_bt" :href="loginLink">Login now</a>
          </div>
        </v-card-title>
      </template>
    </v-form>
  </div>
</template>

<script>
  import {getRecentDomain} from "../../store/modules/auth";

  const StatusTypes = {
    LOADING: "LOADING",
    VALID_LINK: "VALID_LINK",
    INVALID_LINK: "INVALID_LINK",
    SUCCESS: "SUCCESS"
  };

  export default {
    name: "ResetPasswordConfirm",
    $_veeValidate: {
      validator: 'new'
    },
    metaInfo: {
      title: "Password Reset"
    },
    data() {
      return {
        status: StatusTypes.LOADING,
        new_password1: "",
        new_password2: "",
        serverErrors: [],
        submitting: false,
        dictionary: {
          /*custom: {
            new_password2: {
              confirmed: 'The field name not enter special characters',
              // custom messages
            }
          }*/
        }
      };
    },
    created() {
      this.$http
        .get(
          `/api/users/auth/password/reset/check/${this.$route.params.uid}/${
            this.$route.params.token
            }/`
        )
        .then(() => (this.status = StatusTypes.VALID_LINK))
        .catch(error => {
          this.status = StatusTypes.INVALID_LINK;
          this.er = error;
        });
    },
    mounted() {
      this.$validator.localize('en')
    },
    computed: {
      statusTypes() {
        return StatusTypes;
      },
      canSubmit() {
        return (
          !!this.new_password1 &&
          !!this.new_password2 &&
          this.new_password1 === this.new_password2
        );
      },
      loginLink() {
        let subdomain = getRecentDomain();
        if (subdomain) {
          return `${location.protocol}//${subdomain}.${location.host}`;
        }
        return "/";
      },
      header() {
        switch (this.status) {
          case StatusTypes.VALID_LINK:
            return "Reset Password";
          case StatusTypes.INVALID_LINK:
            return "That link isn't working.";
          case StatusTypes.SUCCESS:
            return "Password updated";
          default:
            return "Loading...";
        }
      }
    },
    methods: {
      submit() {
        this.$validator.validateAll().then(() => {
          if (this.canSubmit) {
            let new_password1 = this.new_password1;
            let new_password2 = this.new_password2;
            let uid = this.$route.params.uid;
            let token = this.$route.params.token;
            this.serverErrors = [];

            this.$http
              .post("/api/users/auth/password/reset/confirm/", {
                new_password1,
                new_password2,
                uid,
                token
              })
              .then(() => (this.status = StatusTypes.SUCCESS))
              .catch(error => {
                if (error.response.status === 400) {
                  if (error.response.data.token || error.response.data.uid) {
                    this.status = StatusTypes.INVALID_LINK;
                  } else if (error.response.data.new_password2) {
                    this.serverErrors = error.response.data.new_password2;
                  }
                }
              });
          }
        })
      }
    }
  };
</script>
<style>
  .text-lg-center {
    text-align: center;
  }
</style>
