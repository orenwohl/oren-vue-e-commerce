<template>
  <div id="app" class="bg-slate-800">
    <nav-bar></nav-bar>
    <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script>
import NavBar from "./layouts/NavBar.vue";
import TheFooter from "./layouts/TheFooter.vue";
export default {
  name: "App",
  components: {
    NavBar: NavBar,
    TheFooter: TheFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
</style>
