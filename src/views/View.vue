<template>
  <div class="view">
    <div class="youtube">
      <div class="video" v-for="video in getYoutube" :key=video.id>
        <!-- <a :href="`https://youtu.be/${video}`" target="_blank">
          <img :src="`https://img.youtube.com/vi/${video}/hqdefault.jpg`" alt="">
        </a> -->
        <iframe
          :src="`https://www.youtube.com/embed/${video}?enablejsapi=1&autoplay=1&mute=true`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; 
          autoplay; 
          clipboard-write; 
          encrypted-media; 
          gyroscope; 
          picture-in-picture"
          allowfullscreen
          ref="youtube"
        >
        </iframe>
      </div>
    </div>
    <div class="views">
      <div class="video">
        <youtube
          :video-id="videoId"
          :host="host"
          :player-vars="playerVars"
          width="462"
          height="300"
          :resize="true"
          :fitParent="true"
        ></youtube>
      </div>
      <div class="box">
        <div class="autoview">
          <div class="auto">
            <span>自動播放</span>
            <div
              class="switch"
              @click="autoplay"
              :class="{'active': select}"
            >
              <div
                class="circle"
                :class="{'active': select}"
              ></div>
            </div>
            <span>開啟自動播放 需購買VIP</span>
          </div>
          <div class="time">
            <div class="sec">{{ sec }}<span>&nbsp;秒數</span></div>
            <div class="line"></div>
            <div class="point">{{ point }}<span>&nbsp;點數</span></div>
          </div>
          <button>觀看其他</button>
        </div>
        <div class="attention">
          <h2>注意</h2>
          <h3>Attention!!!</h3>
          <p>要購買VIP才能使用增加訂閱功能。</p>
          <p>You have to buy VIP to use the increased</p>
          <p>subscription function.</p>
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
  import * as service from '@/service/webAPI.js';
  export default {
    name: 'Views',
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
    data() {
      return {
        sec: 400,
        point: 480,
        select: false,
        slug: 'none',
        data: '',
        logo_server: 'logoblack.e37e1e94',
        videoId: '7Vc6oQ3HliQ',
        host: 'https://www.youtube.com',
        playerVars: {
          autoplay: 0,
          controls: 0,
          start: 0,
        },
      };
    },
    methods: {
      autoplay() {
        this.select = !this.select;
      },
      getVideo(slug) {
        service.getVideo(slug).then(res => {
          console.log('get Video: ', res);
          this.data = res.data;
        });
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
      },
      getYoutube() {
        return this.$store.state.YoutuArr;
      }
    },
  };
</script>
<style lang="scss" scoped>
  .view {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @include noteBook {
      // height: calc(150vh - 80px);
    }
    .youtube {
      width: 100%;
      display: flex;
      // border: 1px solid red;
      .video {
        width: 12.5%;
        height: 100%;
        background: #d8d8d8;
        // border: 1px solid #979797;
        img {
          width: 100%;
          vertical-align: middle;
        }
        &:nth-of-type(1) {
          border-left: none;
        }
        &:nth-of-type(8) {
          border-right: none;
        }
      }
      .video iframe,
      .video object,
      .video embed {
        width: 100%;
        height: 100%;
      }
    }
    .views {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .video {
        width: 462px;
        height: 300px;
        background: $black;
      }
      .box {
        width: 55%;
        height: 300px;
        background: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .autoview {
          width: 40%;
          height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          @include noteBook {
            width: 45%;
          }
          .auto {
            width: 90%;
            height: 31px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .switch {
              position: relative;
              width: 36px;
              height: 20px;
              // background: #f3bfbe;
              background: #ccc;
              border-radius: 10px;
              cursor: pointer;
              .circle {
                position: absolute;
                top: -3px;
                left: -5px;
                width: 25px;
                height: 25px;
                background: $subGray;
                border-radius: 50px;
                transition: all 0.5s;
              }
              .circle.active {
                position: absolute;
                top: -3px;
                left: 18px;
                width: 25px;
                height: 25px;
                background: #c62828;
                border-radius: 50px;
                transition: all 0.5s;
              }
            }
            .switch.active {
              background: #f3bfbe;
            }
            span {
              &:nth-of-type(1) {
                font-size: 21px;
                color: #000000;
                font-weight: 550;
              }
              &:nth-of-type(2) {
                font-size: 12px;
                color: #e02020;
                font-weight: 400;
              }
            }
          }
          .time {
            width: 90%;
            height: 50px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .sec {
              font-size: 34px;
              color: $subGray;
              font-weight: 550;
              span {
                font-size: 20px;
                font-weight: 400;
              }
            }
            .line {
              width: 2px;
              height: 12px;
              margin-top: 15px;
              background: $subGray;
            }
            .point {
              font-size: 34px;
              color: $subGray;
              font-weight: 550;
              span {
                font-size: 20px;
                font-weight: 400;
              }
            }
          }
          button {
            width: 90%;
            height: 40px;
            border: 0;
            background: $mainRed;
            border-radius: 5px;
            font-size: 16px;
            color: #ffffff;
            text-align: center;
            font-weight: 500;
            cursor: pointer;
          }
        }
        .attention {
          width: 50%;
          height: 180px;
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
          h2 {
            font-size: 24px;
          }
          h3 {
            font-size: 21px;
            margin-top: 10px;
          }
          p {
            font-size: 14px;
            color: #7f7f7f;
            letter-spacing: 1.29px;
            text-align: center;
            line-height: 18px;
            font-weight: 500;
            &:nth-of-type(1) {
              margin-top: 21px;
            }
          }
        }
      }
    }
    .advertise {
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
