<template>
  <div class="subscribe">
    <div class="fake"></div>
    <div class="channel">
      <div class="idbox">
        <div class="id">
          <div class="icon"></div>
          <div class="info">
            <div class="title">Channel ID</div>
            <p>簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介</p>
          </div>
        </div>
      </div>
      <div class="sub">
        <p class="text">
          Instructions: click subscribe button to
          redirect to the channel in YouTube app.
          Subscribe this channel and like the video on
          YouTube and return this app to receive coin.
          Your account you logged in this app and
          YouTube app must be same.
        </p>
        <div class="btnbox">
          <button class="scribe">訂閱他</button>
          <button class="next">下一個</button>
        </div>
      </div>
    </div>
    <div class="advertise">
      <div class="box">
        <img
          :src="[
            proceENV === 'production'
              ? 'https://originmedia2030.com' + get_bottom_img
              : process + get_bottom_img,
          ]"
          alt=""
        />
      </div>
      <div class="box">
        <img
          :src="[
            proceENV === 'production'
              ? 'https://originmedia2030.com' + get_bottom_img
              : process + get_bottom_img,
          ]"
          alt=""
        />
      </div>
      <div class="box">
        <img
          :src="[
            proceENV === 'production'
              ? 'https://originmedia2030.com' + get_bottom_img
              : process + get_bottom_img,
          ]"
          alt=""
        />
      </div>
      <!-- <div class="logo" :style="[proceENV === 'production' ? { background: proImg(logo_server) } : '']"></div> -->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Subscribe',
    data() {
      return {
        logo_server: 'logoblack.e37e1e94'
      };
    },
    created() {
      //在頁面載入時讀取localStorage裡的狀態資訊
      if (localStorage.getItem("store")){
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("store"))))
      }
    },
    methods: {
      proImg(name) {
        return 'url(' + `/img/${name}.svg` + ') no-repeat center center';
      },
    },
    computed: {
      process() {
        return process.env.VUE_APP_API_TARGET;
      },
      proceENV() {
        return process.env.NODE_ENV;
      },
      get_bottom_img() {
        return this.$store.state.bottomImg
      }
    }
  };
</script>
<style lang="scss" scoped>
  .subscribe {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // justify-content: flex-end;
    // align-items: center;
    @include noteBook {
      // height: calc(150vh - 80px);
    }
    .fake {
      width: 100%;
    }
    .channel {
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      // margin-bottom: 100px;
      @include noteBook {
        // margin-bottom: 50px;
      }
      .idbox {
        position: relative;
        width: 624px;
        height: 400px;
        background: #ffffff;
        border: 5px solid #ffffff;
        box-shadow: 0 8px 8px 0 rgba(198, 40, 40, 0.2), 0 0 8px 0 rgba(198, 40, 40, 0.2);
        border-radius: 46px;
        @include noteBook {
          width: 40%;
          height: 360px;
        }
        .id {
          position: absolute;
          width: 614px;
          height: 390px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #ffffff;
          border: 2px solid #c62828;
          border-radius: 46px;
          @include noteBook {
            width: 100%;
            height: 350px;
          }
          .icon {
            width: 126px;
            height: 126px;
            background: #979797;
            border-radius: 100px;
            @include noteBook {
              width: 100px;
              height: 100px;
            }
          }
          .info {
            width: 316px;
            height: 162px;
            @include noteBook {
              width: 270px;
            }
            .title {
              font-size: 24px;
              color: #737373;
              font-weight: 500;
            }
            p {
              font-size: 16px;
              color: #7f7f7f;
              letter-spacing: 1.52px;
              font-weight: 500;
              margin-top: 15px;
              line-height: 30px;
            }
          }
        }
      }
      .sub {
        width: 624px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: #fafafa;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        padding: 3% 0;
        @include noteBook {
          width: 45%;
          height: 360px;
        }
        .text {
          width: 406px;
          height: 194px;
          margin: 0 auto;
          font-size: 16px;
          color: #7f7f7f;
          letter-spacing: 1.52px;
          line-height: 30px;
          font-weight: 500;
          // margin-top: 5%;
        }
        .btnbox {
          display: flex;
          justify-content: center;
          button {
            width: 92px;
            height: 38px;
            background: #e53935;
            border-radius: 5px;
            border: 0;
            font-size: 16px;
            color: #ffffff;
            font-weight: 500;
            cursor: pointer;
          }
          .scribe {
            margin: 0 43px;
          }
          .next {
            margin: 0 43px;
          }
        }
      }
    }
    .advertise {
      display: flex;
      justify-content: center;
      align-items: center;
      .box {
        width: 33.33%;
        // height: 200px;
        background: #d8d8d8;
        border: 1px solid #979797;
        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
        @include noteBook {
          // width: 40vw;
          img {
            width: 100%;
          }
        }
      }
      .logo {
        position: relative;
        width: 300px;
        height: 150px;
        left: 20px;
        background: url('~@/assets/images/logo black.svg') no-repeat center center;
        // background: url('/img/logo black.00d66722.svg') no-repeat center center; //build用
      }
    }
  }
</style>
