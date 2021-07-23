<template>
  <div class="home">
    <div class="youtube">
      <div
        v-for="item in 8"
        class="video"
        :key="item.id"
      ></div>
    </div>
    <div class="subscrip">
      <div
        class="view"
        @click="addView"
      >
        <div class="border">
          <figure>
            <img
              src="@/assets/images/icon/view/selected.svg"
              alt=""
            >
          </figure>
          <span>增加觀看時數</span>
          <span>Add View</span>
        </div>
      </div>
      <div class="attention">
        <h2>注意</h2>
        <h3>Attention!!!</h3>
        <p>要購買VIP才能使用增加訂閱功能。</p>
        <p>You have to buy VIP to use the increased</p>
        <p>subscription function.</p>
      </div>
      <div
        class="view"
        @click="subScribe"
      >
        <div class="border">
          <figure>
            <img
              src="@/assets/images/icon/subscribe/selected.svg"
              alt=""
            >
          </figure>
          <span>增加訂閱人數</span>
          <span>Add Subscribe</span>
        </div>
      </div>
    </div>
    <div class="advertise">
      <div class="box"></div>
      <div class="logo"></div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'Home',
    data() {
      return {};
    },
    methods: {
      addView() {
        console.log('view');
        this.$router.push('/home/task');
      },
      subScribe() {
        console.log('subscribe');
      },
    },
  };
</script>
<style lang="scss" scoped>
  .home {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @include noteBook {
      height: calc(150vh - 80px);
    }
    .youtube {
      width: 100%;
      display: flex;
      // border: 1px solid red;
      .video {
        width: 12.5%;
        height: 120px;
        background: #d8d8d8;
        border: 1px solid #979797;
        &:nth-of-type(1) {
          border-left: none;
        }
        &:nth-of-type(8) {
          border-right: none;
        }
      }
    }
    .subscrip {
      width: 100%;
      height: 280px;
      display: flex;
      flex-direction: row !important;
      justify-content: space-around;
      // margin-top: 150px;
      .view {
        position: relative;
        width: 360px;
        height: 280px;
        background: #ffffff;
        border: 5px solid #ffffff;
        box-shadow: 0 8px 8px 0 rgba(198, 40, 40, 0.2), 0 0 8px 0 rgba(198, 40, 40, 0.2);
        border-radius: 46px;
        cursor: pointer;
        .border {
          position: absolute;
          width: 350px;
          height: 270px;
          background: #ffffff;
          border: 2px solid #c62828;
          border-radius: 46px;
          figure {
            width: 88px;
            height: 88px;
            margin: 48px auto 24px;
            img {
              width: 100%;
            }
          }
          span {
            display: block;
            text-align: center;
            font-size: 21px;
            color: $gray;
            letter-spacing: 1px;
            font-weight: 550;
            &:nth-of-type(2) {
              margin-top: 10px;
            }
          }
        }
      }
      .attention {
        width: 492px;
        height: 280px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2,
        h3 {
          color: $subRed;
          letter-spacing: 1.05px;
          font-weight: 700;
        }
        h3 {
          margin-top: 10px;
        }
        p {
          color: #7f7f7f;
          letter-spacing: 1.29px;
          text-align: center;
          line-height: 36px;
          font-weight: 500;
          &:nth-of-type(1) {
            font-size: 24px;
            margin-top: 36px;
          }
          &:not(:nth-of-type(1)) {
            font-size: 21px;
          }
        }
      }
    }
    .advertise {
      // position: absolute;
      // bottom: 0;
      // left: 25%;
      // width: 1024px;
      // height: 200px;
      // margin: auto;
      // background: #d8d8d8;
      // border: 1px solid #979797;
      // border: 1px solid red;
      // margin-top: 100px;
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
      }
    }
  }
</style>
