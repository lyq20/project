<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "../public/reset.css";
export default {
  name: "app"
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
