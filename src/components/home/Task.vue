<template>
  <div class="task">
    Task
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
  };
</script>
<style lang="scss" scoped>
  .task {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    @include noteBook {
      height: calc(150vh - 80px);
    }
  }
</style>
