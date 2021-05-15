<template>
  <div class="outer">
    <Toast position="top-right" />
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
export default {
  name: "app",
  components: { Toast },
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