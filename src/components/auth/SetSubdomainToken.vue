<template>
  <iframe
    style="width:0;height:0;border:0; border:none;"
    :src="iframeSrc"
    v-if="subdomain && token"
    @load="load"
  ></iframe>
</template>

<script>
import { getSubdomainURL, setSESSION, SESSION } from "../../utils/index";

export default {
  name: "SetSubdomainToken",
  props: {
    subdomain: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    },
    load: {
      type: Function,
      required: true
    }
  },
  created() {
    let { token } = this.$route.query;
    if (token) {
      setSESSION(SESSION.TOKEN, token);
    }
  },
  computed: {
    iframeSrc() {
      let subdomainURL = getSubdomainURL(this.subdomain);
      return `${subdomainURL}/set-token?token=${this.token}`;
    }
  }
};
</script>
