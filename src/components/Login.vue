<template>
  <div class="login">
    <div class="top">
      <div class="youtube"></div>
      <div class="logoBox">
        <div class="logo"></div>
        <p>OriginMedia2030- get subscribers, views and likes</p>
        <p>Get more subscribers, promote your channel</p>
        <p>Login with your YouTube account</p>
      </div>
    </div>
    <div class="bottom">
      <div class="box">
        <div>
          <figure>
            <img
              src="@/assets/images/android.svg"
              alt="android"
            >
          </figure>
          <p>Android Download</p>
        </div>
        <div>
          <figure>
            <img
              src="@/assets/images/apple.svg"
              alt="apple"
            >
          </figure>
          <p>IOS Download</p>
        </div>
        <div>
          <figure>
            <img
              src="@/assets/images/windows.svg"
              alt="windows"
            >
          </figure>
          <p>WINDOWS</p>
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
  export default {
    data() {
      return {};
    },
    methods: {
      login() {
        this.$router.push('/home');
      },
    },
  };
</script>
<style lang="scss">
  .login {
    padding-bottom: 80px;
    .top {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 562px;
      background-color: $mainRed;
      .youtube {
        width: 637.63px;
        height: 362px;
        border: 1px solid white;
      }
      .logoBox {
        margin-left: 7%;
        .logo {
          width: 516px;
          height: 226px;
          margin: auto;
          background: url('~@/assets/logo.svg');
          background-size: 100%;
        }
        p {
          letter-spacing: 0;
          text-align: center;
          color: $white;
          font-weight: 600;
          line-height: 32px;
          &:nth-of-type(1) {
            margin-top: 54px;
            font-size: 22px;
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
        margin-top: 80px;
        div {
          margin: 0 62px;
          cursor: pointer;
          figure {
            width: 128px;
            height: 128px;
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
        margin-top: 74px;
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
