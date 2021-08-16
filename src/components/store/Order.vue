<template>
  <div class="order">
    <div class="fake"></div>
    <div class="top">
      <div
        class="back"
        @click="back"
      >
        <i class="fas fa-chevron-left"></i>
        <div class="text">返回</div>
      </div>
      <div class="orderBox">
        <div class="border">
          <div class="list">
            <div>
              <div class="title">帳戶名稱</div>
              <input
                class="input"
                type="text"
                v-model="name_order"
                disabled
              >
            </div>
            <div>
              <div class="title">銀行名稱</div>
              <input
                class="input"
                type="text"
                v-model="bankName"
                disabled
              >
            </div>
            <div>
              <div class="title">銀行代碼</div>
              <input
                class="input"
                type="text"
                v-model="bankCode"
                disabled
              >
            </div>
            <div>
              <div class="title">銀行帳戶號碼</div>
              <input
                class="input"
                type="text"
                v-model="bankID"
                disabled
              >
            </div>
            <div>
              <div class="title">匯款金額(新台幣)</div>
              <input
                class="input"
                type="text"
                v-model="pay"
                disabled
              >
            </div>
          </div>
          <div class="attention">
            <div class="zhuyi">
              <h4>注意
                <img src="@/assets/images/icon/attention.svg" alt="">
              </h4>
              <h5>Attention!!!</h5>
            </div>
            <div class="dateBox">
              <span>此交易屬消費行為在您匯款前請確認是否需要此商品</span>
              <span>該商品售出概不退</span>
              <span>如有商品的任何疑問</span>
              <span class="line-Pic">或者匯款後有商品的相關資訊及問題請洽
                <img src="@/assets/images/icon/line2.svg" alt="">
              </span>
              <span>Line : yao5052014</span>
              <!-- <span>2021/07/20 16:19:08</span>
              <span>請在期限內轉帳完成</span> -->
            </div>
          </div>
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
      <!-- <div class="logo" :style="[proceENV === 'production' ? { background: proCheck(logo_server) } : '']"></div> -->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name_order: '林思延',
        bankName: '合作金庫銀行',
        bankCode: '006',
        bankID: '0490872156221',
        pay: 150,
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
      back() {
        this.$router.push('/store');
      },
      proCheck(name) {
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
  .order {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .fake {
      width: 100%;
    }
    .top {
      width: 100%;
      display: flex;
      .back {
        width: 144px;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
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
      .orderBox {
        width: 45%;
        height: 620px;
        background: #ffffff;
        border: 6px solid #ffffff;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
        border-radius: 22.8px;
        // margin-top: 1.9%;
        margin-left: 17%;
        @include noteBook {
          width: 55%;
          height: 460px;
          margin-left: 8%;
        }
        .border {
          width: 100%;
          height: 610px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #ffffff;
          border: 2px solid #c62828;
          border-radius: 22.8px;
          @include noteBook {
            height: 450px;
            padding-left: 20px;
          }
          .list {
            width: 250px;
            height: 520px;
            @include noteBook {
              height: auto;
            }
            div {
              &:not(:nth-of-type(1)) {
                margin-top: 18px;
                @include noteBook {
                  margin-top: 10px;
                }
              }
              .title {
                font-size: 24px;
                color: $subRed;
                font-weight: 550;
                @include noteBook {
                  font-size: 18px;
                }
              }
              .input {
                width: 100%;
                height: 40px;
                background: #f3f3f3;
                border: 1px solid #979797;
                border-radius: 10px;
                margin-top: 16px;
                font-size: 18px;
                color: #000000;
                letter-spacing: 1.3px;
                font-weight: 400;
                padding-left: 10px;
                outline: 0;
                @include noteBook {
                  height: 30px;
                  font-size: 16px;
                }
              }
            }
          }
          .attention {
            width: 365px;
            height: 520px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .zhuyi {
              position: relative;
              width: 160px;
              height: 93px;
              h4 {
                font-size: 32px;
                color: #c62828;
                letter-spacing: 3.05px;
                text-align: center;
                line-height: 47px;
                font-weight: 550;
                @include noteBook {
                  font-size: 28px;
                }
              }
              h5 {
                font-size: 24px;
                color: #c62828;
                letter-spacing: 3.05px;
                text-align: center;
                line-height: 36px;
                font-weight: 500;
                @include noteBook {
                  font-size: 20px;
                }
              }
              img {
                position: absolute;
                top: 7%;
                right: 5%;
                width: 20%;
              }
            }
            .dateBox {
              width: 365px;
              height: 150px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              margin-top: 10%;
              span {
                font-size: 24px;
                color: #7f7f7f;
                letter-spacing: 2.29px;
                text-align: center;
                font-weight: 550;
                @include noteBook {
                  font-size: 20px;
                }
                // &:nth-of-type(2) {
                //   font-size: 32px;
                //   color: #c62828;
                //   letter-spacing: 2px;
                //   text-align: center;
                //   font-weight: 550;
                //   margin: 16px 0;
                //   @include noteBook {
                //     font-size: 28px;
                //   }
                // }
              }
              .line-Pic {
                img {
                  width: 7%;
                }
              }
            }
          }
        }
      }
    }
    .advertise {
      // width: 96%;
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
        background: url('~@/assets/images/logoblack.svg') no-repeat center center;
        // background: url('/img/logo black.00d66722.svg') no-repeat center center; //build用
        @include noteBook {
          width: 280px;
        }
      }
    }
  }
</style>
