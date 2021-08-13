<template>
  <div class="login">
    <div class="top">
      <div class="youtube">
        <youtube
          :video-id="videoId"
          :host="host"
          :player-vars="playerVars"
          :resize="true"
          :fitParent="true"
          @ready="ready"
          ref="youtube"
        ></youtube>
      </div>
      <div class="logoBox">
        <div
          class="logo"
          :style="[proceENV === 'production' ? { background: proImg(logo_name) } : '']"
        ></div>
        <p>OriginMedia2030- get subscribers, views and likes</p>
        <p>Get more subscribers, promote your channel</p>
        <p>Login with your YouTube account</p>
      </div>
    </div>
    <div class="bottom">
      <div class="box">
        <div @click="toAndroid">
          <figure>
            <img
              src="@/assets/images/android.svg"
              alt="android"
            >
          </figure>
          <p>Android Download</p>
        </div>
        <div @click="toFB">
          <figure>
            <img
              src="@/assets/images/facebook.svg"
              alt="apple"
            >
          </figure>
          <p>官方粉絲團</p>
        </div>
        <div @click="toWindow">
          <figure>
            <img
              src="@/assets/images/youtube.svg"
              alt="windows"
            >
          </figure>
          <p>官方Youtube</p>
        </div>
      </div>
      <div class="loginbox">
        <div
          class="btn"
          @click="login"
        >
          <figure class="icon">
            <img
              src="@/assets/images/icon/google.svg"
              alt=""
            >
          </figure>
          <span>Google Login</span>
        </div>
      </div>
      <span>Signin with your google account</span>
    </div>
  </div>
</template>
<script>
  import * as service from '@/service/webAPI.js';
  export default {
    data() {
      return {
        videoId: '7Vc6oQ3HliQ',
        host: 'https://www.youtube.com',
        playerVars: {
          autoplay: 0,
          controls: 0,
          start: 0,
        },
        logo_name: 'logo.914679a1',
        slug: 'none',
        screenWidth: document.body.clientWidth
      };
    },
    created() {
      this.getMaq_IMG(this.slug); //預先取得跑馬燈及廣告圖片
      this.getYoutebe();  //預先取得8支youtu
    },
    mounted() {
      window.addEventListener("resize", this.resizeHendler);
    },
    methods: {
      login() {
        this.$router.push('/home');
      },
      toAndroid() {
        location.href = 'https://play.google.com/store/apps/details?id=com.originmedia2030';
      },
      toFB() {
        location.href = 'https://www.facebook.com/groups/3108879035836663/?ref=share';
      },
      toWindow() {
        location.href = 'https://www.youtube.com/channel/UCCDW-mjGWAKvMyPUQUC14hw';
      },
      ready() {
        this.$refs.youtube.player.playVideo();
      },
      proImg(name) {
        return 'url(' + `/img/${name}.svg` + ') no-repeat center center';
      },
      getMaq_IMG(slug) {
        service.getMaq_IMG(slug).then(res => {
          this.$store.commit('GET_MARQUEE', res.data.marquee);           // 跑馬燈 
          this.$store.commit('GET_BOTMIMG', res.data.video_bottom_img);  // 廣告圖
          // this.$store.commit('GET_HREF', res.data.video_bottom_img_url); // 廣告圖連結
        });
      },
      getYoutebe() {
        this.$store.dispatch("getYoutube");
      },
      resizeHendler() {
        const vm = this;
        window.screenWidth = document.body.clientWidth;
        vm.screenWidth = window.screenWidth;
        console.log(vm.screenWidth);
      },
      // requireLogo(name) {
      //   return 'url(' + require(`../../assets/images/${name}.svg`) + ')';
      // },
    },
    computed: {
      proceENV() {
        return process.env.NODE_ENV;
      },
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.resizeHendler);
    }
  };
</script>
<style lang="scss">
  .login {
    // padding-bottom: 67px;
     @include noteBook {
       padding-bottom: 20px;
     }
    .top {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
      background-color: $mainRed;
      .youtube {
        width: 35%;
        height: 80%;
      }
      .youtube iframe,
      .youtube object,
      .youtube embed {
        // position: absolute;
        // top: 0;
        // left: 0;
        width: 100%;
        height: 100%;
      }
      .logoBox {
        margin-left: 7%;
        .logo {
          // width: 430px;
          height: 226px;
          margin: auto;
          background: url(~@/assets/images/logo.svg) no-repeat center center;
          // background: url('/img/logo.c0bcc1c2.svg'); // build用
          background-size: 100%;
          // @include noteBook {
          //   width: 430px;
          // }
        }
        p {
          letter-spacing: 0;
          text-align: center;
          color: $white;
          font-weight: 600;
          line-height: 32px;
          @include noteBook {
          }
          &:nth-of-type(1) {
            margin-top: 34px;
            font-size: 22px;
            @include noteBook {
              margin-top: 24px;
            }
          }
          &:not(:nth-of-type(1)) {
            font-size: 16px;
          }
        }
      }
    }
    .bottom {
      .box {
        display: flex;
        justify-content: center;
        margin-top: 4%;
        div {
          margin: 0 62px;
          cursor: pointer;
          figure {
            width: 128px;
            height: 128px;
            @include noteBook {
              width: 100px;
              height: 100px;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
          p {
            letter-spacing: 0.5px;
            font-size: 14px;
            color: $deepGray;
            text-align: center;
            margin-top: 28px;
            font-weight: 600;
          }
        }
      }
      .loginbox {
        margin-top: 4%;
        .btn {
          width: 152px;
          height: 40px;
          background: #ffffff;
          box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
          border-radius: 5px;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 10px;
          cursor: pointer;
          .icon {
            width: 18px;
            height: 18px;
            img {
              width: 100%;
            }
          }
          span {
            margin: 0;
            margin-left: 15.5px;
          }
        }
      }
      span {
        font-size: 14px;
        color: #4d4d4d;
        letter-spacing: 0.5px;
        text-align: center;
        font-weight: 300;
        display: block;
        margin-top: 24px;
      }
    }
  }
</style>
