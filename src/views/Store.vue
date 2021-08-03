<template>
  <div class="store">
    <div
      v-if="mask"
      class="buyCoin"
    >
      <div>
        <h4>提示</h4>
        <p>確認購買轉往付款頁面嗎</p>
      </div>
      <div class="btn">
        <span @click="cancle">取消</span>
        <span @click="confirm">確認</span>
      </div>
    </div>
    <div class="storeBox">
      <div class="vip">
        <div class="border">
          <div class="coinBox">
            <div
              class="coin"
              v-for="coin in coins"
              :key="coin.usd"
              @click="saveMoney"
            >
              <div class="money">
                <figure class="icon">
                  <img
                    src="@/assets/images/icon/coin.svg"
                    alt=""
                  >
                </figure>
                <span>{{ coin.coin }}</span>
              </div>
              <div class="usd">
                <span>{{ coin.usd }}</span>
                <span>USD</span>
              </div>
            </div>
          </div>
          <div class="days">
            <div
              class="vipBox"
              @click="saveMoney"
            >
              <div class="vipday">
                <div>
                  <figure class="icon">
                    <img
                      src="@/assets/images/icon/vip.svg"
                      alt=""
                    >
                  </figure>
                  <span>VIP 30 Days</span>
                </div>
                <span>35 USD</span>
              </div>
              <div class="condition">
                <span>1. 建立任務10%折扣</span>
                <span>2. 任務上限25個</span>
                <span>3. 贈送30萬顆金幣</span>
                <span>4. 自動播放</span>
              </div>
            </div>
            <span>有購買金幣發生錯誤請聯繫</span>
            <span>yao5052030@gmail.com</span>
            <span>Line: yao5052014</span>
          </div>
        </div>
      </div>
      <div class="cooperation">
        <div class="line">
          <figure>
            <img
              src="@/assets/images/icon/line.svg"
              alt=""
            >
          </figure>
          <div>
            <span>加入群組團聊最新資訊</span>
            <span>加入群組有機會參加網紅活動</span>
          </div>
        </div>
        <div class="cow">
          <figure>
            <img
              src="@/assets/images/support/Princess.png"
              alt=""
            >
          </figure>
          <figure>
            <img
              src="@/assets/images/support/WowCow.png"
              alt=""
            >
          </figure>
          <figure>
            <img
              src="@/assets/images/support/Entertainment.png"
              alt=""
            >
          </figure>
        </div>
        <div class="krone">
          <figure>
            <img
              src="@/assets/images/support/Krone.png"
              alt=""
            >
          </figure>
        </div>
        <div class="partner">
          <span>合作夥伴</span>
          <span>cooperation partner</span>
        </div>
      </div>
    </div>
    <div class="advertise">
      <div class="box"></div>
      <div class="logo" :style="[proceENV === 'production' ? { background: proImg(logo_server) } : '']"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Store',
    data() {
      return {
        coins: [
          {
            coin: 600,
            usd: 5,
          },
          {
            coin: 100000,
            usd: 10,
          },
          {
            coin: 1500000,
            usd: 100,
          },
          {
            coin: 4000000,
            usd: 200,
          },
        ],
        logo_server: 'logo black.00d66722'
      };
    },
    methods: {
      saveMoney() {
        console.log('money');
        this.$store.commit('SET_MASK', true);
      },
      cancle() {
        this.$store.commit('SET_MASK', false);
      },
      confirm() {
        this.$store.commit('SET_MASK', false);
        this.$router.push('/store/order');
      },
      proImg(name) {
        return 'url(' + `/img/${name}.svg` + ') no-repeat center center';
      },
    },
    computed: {
      mask() {
        return this.$store.state.mask;
      },
      proceENV() {
        return process.env.NODE_ENV;
      },
    },
  };
</script>
<style lang="scss" scoped>
  .store {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @include noteBook {
      height: calc(150vh - 80px);
    }
    .buyCoin {
      position: absolute;
      top: 0;
      left: 0;
      right: 10%;
      bottom: 10%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 434px;
      height: 300px;
      background: #ffffff;
      border-radius: 5px;
      padding: 25px;
      z-index: 9999;
      h4 {
        font-size: 24px;
        color: #000;
        font-weight: 550;
      }
      p {
        margin-top: 15px;
      }
      .btn {
        align-self: flex-end;
        span {
          margin: 0 20px;
          padding: 5px;
          cursor: pointer;
        }
      }
    }
    .storeBox {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 150px;
      .vip {
        position: relative;
        width: 814px;
        height: 407px;
        background: #ffffff;
        border: 5px solid #ffffff;
        box-shadow: 0 8px 8px 0 rgba(198, 40, 40, 0.2), 0 0 8px 0 rgba(198, 40, 40, 0.2);
        border-radius: 46px;
        @include noteBook {
          width: 50%;
        }
        .border {
          position: absolute;
          width: 804px;
          height: 397px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #ffffff;
          border: 2px solid #c62828;
          border-radius: 46px;
          @include noteBook {
            width: 100%;
          }
          .coinBox {
            width: 343px;
            height: 300px;
            @include noteBook {
              width: 45%;
            }
            .coin {
              width: 343px;
              height: 64px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              background: #fff;
              box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
              border-radius: 5px;
              padding: 0 24px;
              cursor: pointer;
              @include noteBook {
                width: 100%;
              }
              &:not(:nth-of-type(1)) {
                margin-top: 16px;
              }
              .money {
                height: 32px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .icon {
                  width: 32px;
                  height: 32px;
                  img {
                    width: 100%;
                  }
                }
                span {
                  font-size: 16px;
                  color: #000;
                  font-weight: 400;
                  margin-left: 16px;
                }
              }
              .usd {
                width: 75px;
                height: 32px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                span {
                  font-size: 16px;
                  color: #000;
                  text-align: right;
                  font-weight: 400;
                  &:nth-of-type(2) {
                    margin-left: 8px;
                  }
                }
              }
            }
          }
          .days {
            width: 343px;
            height: 300px;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            @include noteBook {
              width: 45%;
            }
            .vipBox {
              width: 343px;
              height: 144px;
              display: flex;
              flex-direction: column;
              background: #ffffff;
              box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
              border-radius: 5px;
              margin-bottom: 46px;
              @include noteBook {
                width: 100%;
              }
              .vipday {
                width: 100%;
                height: 32px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 16px;
                div {
                  display: flex;
                  align-items: center;
                  .icon {
                    width: 32px;
                    height: 32px;
                    margin-left: 8px;
                    img {
                      width: 100%;
                    }
                  }
                  span {
                    margin-left: 16px;
                  }
                }
                span {
                  font-size: 16px;
                  color: #000000;
                  font-weight: 400;
                }
              }
              .condition {
                width: 134px;
                margin-top: 8.5px;
                margin-left: 72px;
                span {
                  display: block;
                  font-size: 14px;
                  color: #7f7f7f;
                  font-weight: 400;
                  text-align: left;
                  line-height: 10px;
                }
              }
            }
            span {
              font-size: 18px;
              color: #7f7f7f;
              text-align: center;
              font-weight: 400;
              &:not(:nth-of-type(1)) {
                margin-top: 16px;
              }
            }
          }
        }
      }
      .cooperation {
        width: 464px;
        height: 407px;
        .line {
          width: 415px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ffffff;
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          margin: auto;
          cursor: pointer;
          figure {
            width: 48px;
            height: 48px;
            margin-right: 8px;
            img {
              width: 100%;
            }
          }
          div {
            margin-left: 8px;
            line-height: 25px;
            span {
              display: block;
              font-size: 21px;
              color: #000000;
              font-weight: bold;
              &:nth-of-type(2) {
                font-size: 14px;
                color: #7f7f7f;
                font-weight: 400;
              }
            }
          }
        }
        .cow {
          display: flex;
          justify-content: center;
          margin-top: 24px;
          figure {
            width: 144px;
            height: 144px;
            cursor: pointer;
            &:nth-of-type(2) {
              margin: 0 16px;
            }
            img {
              width: 100%;
            }
          }
        }
        .krone {
          margin-top: 16px;
          cursor: pointer;
          figure {
            width: 441.17px;
            height: 72.44px;
            img {
              width: 100%;
            }
          }
        }
        .partner {
          margin-top: 19.5px;
          span {
            display: block;
            font-size: 24px;
            color: #7f7f7f;
            text-align: center;
            font-weight: 700;
            &:nth-of-type(2) {
              font-size: 16px;
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
        // background: url('/img/logo black.00d66722.svg') no-repeat center center; //build用
      }
    }
  }
</style>
