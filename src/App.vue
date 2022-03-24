<script>
export default {
  onLaunch: function () {
    this.$http.post("auth/me").then((res) => {
      console.log("res", res);
    });
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
</style>
