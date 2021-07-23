<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>


<style lang="scss">
  @import './assets/style/all.scss'; // node-sass 4.14.1 & sass-loader 8.0.2

  // #app {
  //   font-family: Avenir, Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  //   color: #2c3e50;
  //   background: $black;
  // }

  // #nav {
  //   padding: 30px;
  // }

  // #nav a {
  //   font-weight: bold;
  //   color: #2c3e50;
  // }

  // #nav a.router-link-exact-active {
  //   color: #42b983;
  // }
</style>
