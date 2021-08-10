<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div
      v-if="mask"
      @click="closeMask()"
      class="mask"
    ></div>
    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      closeMask() {
        this.$store.commit('SET_MASK', false);
        this.$store.commit('OPEN_VIEW', false);
        this.$store.commit('OPEN_SEC', false);
      },
    },
    computed: {
      mask() {
        return this.$store.state.mask;
      },
    },
  };
</script>


<style lang="scss">
  @import './assets/style/all.scss'; // node-sass 4.14.1 & sass-loader 8.0.2
  #app {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    .mask {
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.4);
      z-index: 8;
      @include noteBook {
        height: 150vh;
      }
    }
  }
</style>
