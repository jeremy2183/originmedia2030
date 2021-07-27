<template>
  <div class="addYoutu">
    <div class="top">
      <div
        class="back"
        @click="back"
      >
        <i class="fas fa-chevron-left"></i>
        <div class="text">返回</div>
      </div>
      <div class="views"></div>
    </div>
    <div class="advertise">
      <div class="box"></div>
      <div class="logo"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      back() {
        this.$router.push('/home/task');
      },
    },
  };
</script>
<style lang="scss" scoped>
  .addYoutu {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @include noteBook {
      height: calc(150vh - 80px);
    }
    .top {
      width: 100%;
      .back {
        width: 130.88px;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 1.9%;
        margin-left: 1.9%;
        background: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        padding: 0 10px;
        cursor: pointer;
        svg {
          font-size: 31px;
          color: #8a8a8a;
        }
        .text {
          font-size: 21px;
          color: #7f7f7f;
          letter-spacing: 2px;
          text-align: center;
          font-weight: 500;
        }
      }
      .views {
        width: 100%;
        height: 340px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 130px;
        border: 1px solid red;
      }
    }
    .advertise {
      display: flex;
      justify-content: center;
      align-items: center;
      .box {
        width: 1024px;
        height: 200px;
        margin-left: 300px;
        background: #d8d8d8;
        border: 1px solid #979797;
        @include noteBook {
          width: 40vw;
        }
      }
      .logo {
        position: relative;
        width: 300px;
        height: 150px;
        left: 20px;
        background: url('~@/assets/images/logo black.svg') no-repeat center center;
        @include noteBook {
          width: 280px;
        }
      }
    }
  }
</style>
