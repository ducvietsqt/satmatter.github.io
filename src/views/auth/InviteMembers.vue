<template>
  <div class="full-screen">
    <v-form
      v-model="valid"
      lazy-validation
      @submit.prevent="submit" class="form_auth"
    >
      <h4 class="mb-4 text-primary headline font-weight-bold">Invite members</h4>
      <v-layout align-center v-for="(_, index) in emails" :key="index">
        <v-text-field
          v-model="emails[index]"
          label="Email"
          placeholder="name@example.com"
          required
          type="email"
          :rules="emailRules"
          box
        ></v-text-field>
        <v-btn icon color="primary" small @click.stop="remove(index)">
          <v-icon>close</v-icon>
        </v-btn>
      </v-layout>
      <div class="mt-3">
        <div>
          <v-btn
            :disabled="submitting"
            @click.stop="add" flat color="green" class="ma-0 px-0">
            <v-icon left>add_circle</v-icon>
            Add another
          </v-btn>
        </div>
        <div class="mt-3">
          <v-btn color="primary"
                 :disabled="!valid"
                 :loading="submitting"
                 @click.stop="submit"
                 class="ma-0">
            Send Invitations
          </v-btn>
        </div>
        <div class="subheading mt-3">
          Or, <router-link class="link_bt" to="/dashboard">Skip for now</router-link>
        </div>
      </div>
    </v-form>
  </div>
</template>


<script>
  // @ is an alias to /src
  import {getSubdomain} from "../../utils/index";

  export default {
    name: "InviteMembers",

    metaInfo: {
      title: "Invite Members"
    },
    data() {
      return {
        emails: ["", "", ""],
        valid: true,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        submitting: false
      };
    },
    mounted() {
      document.querySelector("input[type='email']").focus();
    },
    methods: {
      submit() {
        let workspace = getSubdomain(location.hostname);
        let emails = this.emails.filter(email => email);
        if(!emails) return false;
        this.submitting = true;
        this.$http
          .post("/api/users/auth/invitations/send", {workspace, emails})
          .then(() => this.$router.push({path: "/dashboard"})).catch(() => {
            this.$eventHub.$emit(this.$eventTypes.snackNotify, "Email information invalid")
        }).finally(() => {
            this.submitting = false;
        })
      },
      add() {
        this.emails.push("");
        this.$nextTick(() => {
          let inputs = document.querySelectorAll("input[type='email']");
          let newAdded = inputs[inputs.length - 1];
          if (newAdded) {
            newAdded.focus();
          }
        });
      },
      remove(index) {
        this.emails.splice(index, 1);
      }
    }
  };
</script>
