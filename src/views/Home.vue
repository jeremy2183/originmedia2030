<template>
  <div class="home">
    <div class="youtube">
      <div class="video">
        <a href="https://youtu.be/Qtm8Srqp8eY" target="_blank">
          <img src="https://img.youtube.com/vi/Qtm8Srqp8eY/hqdefault.jpg" alt="">
        </a>
      </div>
      <div class="video">
        <a href="https://www.youtube.com/watch?v=oMLXOxtoe3g" target="_blank">
          <img src="https://img.youtube.com/vi/oMLXOxtoe3g/hqdefault.jpg" alt="">
        </a>
      </div>
      <div class="video">
        <a href="https://www.youtube.com/watch?v=7Vc6oQ3HliQ" target="_blank">
          <img src="https://img.youtube.com/vi/7Vc6oQ3HliQ/hqdefault.jpg" alt="">
        </a>
      </div>
      <div class="video">
        <a href="https://www.youtube.com/watch?v=McJJ1eGp2PM" target="_blank">
          <img src="https://img.youtube.com/vi/McJJ1eGp2PM/hqdefault.jpg" alt="">
        </a>
      </div>
      <div class="video">
        <a href="https://www.youtube.com/watch?v=rEV3ALWSy3o" target="_blank">
          <img src="https://img.youtube.com/vi/rEV3ALWSy3o/hqdefault.jpg" alt="">
        </a>
      </div>
      <div class="video">
        <a href="https://www.youtube.com/watch?v=Mgf7qBiWMDA" target="_blank">
          <img src="https://img.youtube.com/vi/Mgf7qBiWMDA/hqdefault.jpg" alt="">
        </a>
      </div>
      <div class="video">
        <a href="https://www.youtube.com/watch?v=j5MNE75cE2E" target="_blank">
          <img src="https://img.youtube.com/vi/j5MNE75cE2E/hqdefault.jpg" alt="">
        </a>
      </div>
      <div class="video">
        <a href="https://www.youtube.com/watch?v=ibif6FUe9cs" target="_blank">
          <img src="https://img.youtube.com/vi/ibif6FUe9cs/hqdefault.jpg" alt="">
        </a>
      </div>
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
      <div class="logo" :style="[proceENV === 'production' ? { background: proImg(logo_server) } : '']"></div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'Home',
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
      //在頁面重新整理時將vuex裡的資訊儲存到localStorage裡
      window.addEventListener("beforeunload",()=>{
        localStorage.setItem("store",JSON.stringify(this.$store.state));
      })
    },
    methods: {
      addView() {
        console.log('view');
        this.$router.push('/home/task');
      },
      subScribe() {
        console.log('subscribe');
      },
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
      .video {
        width: 12.5%;
        height: 120px;
        background: #d8d8d8;
        // border: 1px solid #979797;
        img {
          width: 100%;
          height: 125%;
        }
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
        @include noteBook {
          width: 260px;
          height: 220px;
        }
        .border {
          position: absolute;
          width: 350px;
          height: 270px;
          background: #ffffff;
          border: 2px solid #c62828;
          border-radius: 46px;
          @include noteBook {
            width: 250px;
            height: 210px;
          }
          figure {
            width: 88px;
            height: 88px;
            margin: 48px auto 24px;
            @include noteBook {
              width: 55px;
              height: 55px;
            }
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
            @include noteBook {
              font-size: 18px;
            }
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
        width: 720px;
        height: 200px;
        margin-left: 300px;
        background: #d8d8d8;
        border: 1px solid #979797;
        img {
          width: 100%;
          height: 100%;
        }
        @include noteBook {
          width: 40vw;
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
        background: url('~@/assets/images/logoblack.svg') no-repeat center center;
        // background: url('/img/logo black.00d66722.svg') no-repeat center center; //build用
        @include noteBook {
          width: 280px;
        }
      }
    }
  }
</style>
