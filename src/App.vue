<template>
  <div id="app">
    <main-content></main-content>
  </div>
</template>

<script>
import MainContent from "@/pages/MainContent";
export default {
  name: "app",
  components: {
    MainContent
  }
};
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
  width: 100vw;
}
</style>