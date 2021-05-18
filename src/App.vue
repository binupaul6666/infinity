<template>
  <div class="outer">
    <Toast position="top-right" />
    <loading
      v-model:active="isLoading"
      :is-full-page="true"
      :lock-scroll="true"
      :background-color="bgcolor"
      :color="spincolor"
      :opacity="0.9"
      loader="dots"
      :width="150"
      :height="100"
    />
    <router-view />
  </div>
</template>

<style scoped>
.outer {
  height: 100%;
}
</style>

<script>
import Toast from "primevue/toast";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "app",
  components: { Toast, Loading },
  data() {
    return {
      isLoading: false,
      bgcolor: "#1A1A1D",
      spincolor: "#240090",
    };
  },
  created() {
    axios.interceptors.request.use((req) => {
      this.isLoading = true;
      return req;
    });

    axios.interceptors.response.use((res) => {
      this.isLoading = false;
      return res;
    });
  },
  mounted() {
    this.emitter.on("error", (errMsg) => {
      this.$toast.add({
        severity: "error",
        summary: "Error",
        detail: errMsg,
        life: 3000,
      });
    });
    this.emitter.on("info", (infoMsg) => {
      this.$toast.add({
        severity: "info",
        summary: "Info Message",
        detail: infoMsg,
        life: 3000,
      });
    });
    this.emitter.on("success", (successMsg) => {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: successMsg,
        life: 10000,
      });
    });
  },
};
</script>