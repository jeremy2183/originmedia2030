<template>
  <div>
    <header>
      <div class="logo">
        <figure>
          <img
            src="@/assets/logo.svg"
            alt=""
          >
        </figure>
        <p>OriginMedia2030</p>
      </div>
      <div class="announcement">
        <i class="fas fa-bullhorn"></i>
        <div class="news">
          <div class="wrap">
            <marquee
              scrollamount="3"
              scrolldelay="150"
              direction="left"
              onmouseover="this.stop();"
              onmouseout="this.start();"
            >
              跑馬燈跑馬燈跑馬燈跑馬燈跑馬燈跑馬燈跑馬燈跑馬燈跑馬燈跑馬燈跑馬燈跑馬燈
            </marquee>
          </div>
        </div>
      </div>
      <div class="vip">
        <div class="coin">90000</div>
        <span>VIP</span>
        <figure class="icon">
          <img
            src="@/assets/images/icon/coin.svg"
            alt=""
          >
        </figure>
      </div>
    </header>
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
  header {
    position: relative;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    height: 80px;
    background: $mainRed;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 49px;
      figure {
        width: 140px;
        height: 60px;
        img {
          width: 100%;
        }
      }
      p {
        position: relative;
        color: #fff;
        font-size: 24px;
        left: 24px;
      }
    }
    .announcement {
      display: flex;
      margin-left: 70.44px;
      @include noteBook {
        margin-left: 60px;
      }
      svg {
        font-size: 18px;
        color: #fff;
      }
      .news {
        width: 64vw;
        margin-left: 9.14px;
        @include noteBook {
          width: 50vw;
        }
        .wrap {
          marquee {
            font-size: 14px;
            color: #ffffff;
            letter-spacing: 1.33px;
            font-weight: 400;
          }
        }
      }
    }
    .vip {
      display: flex;
      align-items: center;
      margin-left: 24px;
      position: absolute;
      right: 32px;
      .coin {
        color: #fff;
        font-size: 18px;
        text-align: right;
        font-weight: 400;
      }
      span {
        font-size: 18px;
        color: #fefb03;
        letter-spacing: 1.2px;
        text-align: right;
        font-weight: 500;
        margin-left: 24px;
        margin-right: 14px;
      }
      .icon {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
