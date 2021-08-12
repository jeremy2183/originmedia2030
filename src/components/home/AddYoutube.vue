<template>
  <div class="addYoutu">
    <div
      v-if="mask && viewBox"
      class="openview"
    >
      <p>選擇觀看次數</p>
      <hr>
      <div class="box">
        <ul>
          <li>10</li>
          <li>20</li>
          <li>30</li>
          <li>40</li>
          <li>50</li>
        </ul>
      </div>
      <hr>
      <p
        class="confirm"
        @click="confirmView"
      >選擇</p>
    </div>
    <div
      v-if="mask && secBox"
      class="opensec"
    >
      <p>選擇觀看時間</p>
      <hr>
      <div class="box">
        <ul>
          <li>10</li>
          <li>20</li>
          <li>30</li>
          <li>40</li>
          <li>50</li>
        </ul>
      </div>
      <hr>
      <p
        class="confirm"
        @click="confirmSec"
      >選擇</p>
    </div>
    <div class="tops">
      <div
        class="back"
        @click="back"
      >
        <i class="fas fa-chevron-left"></i>
        <div class="text">返回</div>
      </div>
      <div class="views">
        <div class="video"></div>
        <div class="box">
          <div class="setting">
            <h4>影片設定</h4>
            <div class="top">
              <div class="top-view">
                <h6>觀看次數</h6>
                <div
                  class="sec"
                  @click="setView"
                >10</div>
              </div>
              <div class="seconds">
                <h6>觀看秒數</h6>
                <div
                  class="sec"
                  @click="setSec"
                >60</div>
              </div>
            </div>
            <hr>
            <div class="bottom">
              <div class="top-view">
                <h6>VIP Account (reduce 10%)</h6>
                <div class="sec">0</div>
              </div>
              <div class="seconds">
                <h6>總共花費</h6>
                <div class="sec">600</div>
              </div>
            </div>
            <button @click="success">完成</button>
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
    <!-- <div class="advertise">
      <div class="box"></div>
      <div class="logo"></div>
    </div> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        logo_server: 'logoblack.e37e1e94'
      };
    },
    methods: {
      back() {
        this.$router.push('/home/task');
      },
      setView() {
        this.$store.commit('SET_MASK', true);
        this.$store.commit('OPEN_VIEW', true);
      },
      setSec() {
        this.$store.commit('SET_MASK', true);
        this.$store.commit('OPEN_SEC', true);
      },
      confirmView() {
        this.$store.commit('SET_MASK', false);
        this.$store.commit('OPEN_VIEW', false);
      },
      confirmSec() {
        this.$store.commit('SET_MASK', false);
        this.$store.commit('OPEN_SEC', false);
      },
      success() {
        this.$router.push('/home/task');
      },
      proImg(name) {
        return 'url(' + `/img/${name}.svg` + ') no-repeat center center';
      },
    },
    computed: {
      mask() {
        return this.$store.state.mask;
      },
      viewBox() {
        return this.$store.state.view;
      },
      secBox() {
        return this.$store.state.sec;
      },
      process() {
        return process.env.VUE_APP_API_TARGET;
      },
      proceENV() {
        return process.env.NODE_ENV;
      },
      get_bottom_img() {
        return this.$store.state.bottomImg
      }
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
      // height: calc(150vh - 80px);
    }
    .openview {
      position: absolute;
      top: 0;
      left: 0;
      right: 10%;
      bottom: 10%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 434px;
      height: 434px;
      background: #ffffff;
      border-radius: 5px;
      padding: 10px 0;
      z-index: 9999;
      p {
        font-size: 28px;
        color: #000000;
        text-align: center;
        font-weight: 400;
        margin: 0;
      }
      hr {
        width: 90%;
        height: 1px;
        border: 0;
        background-color: #7e7e7e;
      }
      .box {
        ul {
          width: 100%;
          height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          li {
            font-size: 24px;
            color: #7f7f7f;
            text-align: center;
            font-weight: 400;
            cursor: pointer;
          }
        }
      }
      .confirm {
        cursor: pointer;
      }
    }
    .opensec {
      position: absolute;
      top: 0;
      left: 0;
      right: 10%;
      bottom: 10%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 434px;
      height: 434px;
      background: #fff;
      border-radius: 5px;
      padding: 10px 0;
      z-index: 9999;
      p {
        font-size: 28px;
        color: #000000;
        text-align: center;
        font-weight: 400;
        margin: 0;
      }
      hr {
        width: 90%;
        height: 1px;
        border: 0;
        background-color: #7e7e7e;
      }
      .box {
        ul {
          width: 100%;
          height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          li {
            font-size: 24px;
            color: #7f7f7f;
            text-align: center;
            font-weight: 400;
            cursor: pointer;
          }
        }
      }
      .confirm {
        cursor: pointer;
      }
    }
    .tops {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        // margin-top: 100px;
        .video {
          width: 38%;
          height: 380px;
          background: $black;
          @include noteBook {
            height: 300px;
          }
        }
        .box {
          width: 55%;
          height: 380px;
          background: white;
          display: flex;
          justify-content: space-around;
          align-items: center;
          @include noteBook {
            height: 300px;
            align-items: flex-end;
          }
          .setting {
            width: 343px;
            height: 280px;
            @include noteBook {
              width: 45%;
            }
            h4 {
              font-size: 21px;
              color: #000000;
              font-weight: 550;
            }
            .top {
              h6 {
                font-size: 14px;
                color: #000000;
                font-weight: 400;
              }
              .top-view {
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .seconds {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 8px;
              }
              .sec {
                width: 60px;
                height: 30px;
                background: #bbb;
                font-size: 14px;
                color: #000000;
                text-align: center;
                line-height: 30px;
                border-radius: 5px;
                cursor: pointer;
              }
            }
            hr {
              margin: 16px 0;
            }
            .bottom {
              h6 {
                font-size: 14px;
                color: #000000;
                font-weight: 400;
              }
              .top-view {
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .seconds {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 8px;
              }
              .sec {
                width: 60px;
                height: 30px;
                background: #bbb;
                font-size: 14px;
                color: #000000;
                text-align: center;
                line-height: 30px;
                border-radius: 5px;
              }
            }
            button {
              width: 343px;
              height: 40px;
              background: $mainRed;
              border-radius: 5px;
              border: 0;
              font-size: 16px;
              color: #fff;
              margin-top: 40.75px;
              cursor: pointer;
              @include noteBook {
                width: 100%;
                margin-top: 20.75px;
              }
            }
          }
          .attention {
            width: 50%;
            height: 280px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            @include noteBook {
              width: 40%;
            }
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
        @include noteBook {
          width: 280px;
        }
      }
    }
  }
</style>
