<template>
  <div>
    <Header />
    <div class="mainbox">
      <div class="sidebar">
        <div class="user">
          <div class="icon">
            <i class="fas fa-user-alt"></i>
          </div>
          <div class="username">google1111</div>
        </div>
        <div class="view">
          <ul>
            <router-link
              tag="li"
              v-for="(nav, index) in navItem"
              :key="nav.name"
              :to="nav.link"
            >
              <div :class="[`icon${index}`,{'icon01': $route.meta.active === '/Home'}]"></div>
              <div class="username">{{ nav.name }}</div>
            </router-link>
          </ul>
        </div>
        <div
          class="logout"
          @click="logout"
        >
          <figure class="icon">
            <img
              src="@/assets/images/icon/logout.svg"
              alt=""
            >
          </figure>
          <span>登出</span>
        </div>
      </div>
      <div class="contnet">
        <div class="wrap">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from '@/components/Header';
  export default {
    components: {
      Header,
    },
    data() {
      return {
        navItem: [
          {
            icon: require('@/assets/images/icon/home/normal.svg'),
            name: '首頁',
            link: '/home',
          },
          {
            icon: require('@/assets/images/icon/view/normal.svg'),
            name: '觀看',
            link: '/view',
          },
          {
            icon: require('@/assets/images/icon/subscribe/normal.svg'),
            name: '訂閱',
            link: '/subscribe',
          },
          {
            icon: require('@/assets/images/icon/store/normal.svg'),
            name: '商店',
            link: '/store',
          },
        ],
      };
    },
    methods: {
      logout() {
        this.$router.push('/login');
      },
    },
  };
</script>
<style lang="scss" scoped>
  .mainbox {
    display: flex;
    .sidebar {
      width: 200px;
      // height: auto;
      position: relative;
      // top: 80px;
      // left: 0;
      // bottom: 0;
      background: #fafafa;
      box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12), 0 8px 12px 0 rgba(0, 0, 0, 0.24);
      padding: 0;
      // padding-bottom: 850px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      // border: 1px solid red;
      @include noteBook {
        width: 120px;
      }
      .user {
        position: relative;
        top: 32px;
        .icon {
          width: 40px;
          height: 40px;
          margin: auto;
          border-radius: 50px;
          text-align: center;
          background: #d8d8d8;
          padding-top: 5px;
          svg {
            width: 80%;
            height: 80%;
            color: #828282;
          }
          @include TV {
            width: 70px;
            height: 70px;
            // border: 1px solid red;
          }
        }
        .username {
          font-size: 14px;
          color: $gray;
          text-align: center;
          font-weight: 400;
          margin-top: 8px;
          @include TV {
            font-size: 26px;
          }
        }
      }
      .view {
        margin-top: 64px;
        ul {
          li {
            &:not(:nth-of-type(1)) {
              margin-top: 30px;
              @include TV {
                margin-top: 60px;
              }
            }
            &:hover {
              cursor: pointer;
            }
          }
        }
        // .router-link-exact-active {
        .active {
          .icon0 {
            // background-image: url('~@/assets/images/icon/home/selected.svg');
            background-image: url('/img/selected.bed7e0fe.svg'); // build用
          }
          .icon1 {
            // background-image: url('~@/assets/images/icon/view/selected.svg');
            background-image: url('/img/selected.6dc7b020.svg'); // build用
          }
          .icon2 {
            // background-image: url('~@/assets/images/icon/subscribe/selected.svg');
            background-image: url('/img/selected.64802068.svg'); // build用
          }
          .icon3 {
            // background-image: url('~@/assets/images/icon/store/selected.svg');
            background-image: url('/img/selected.eb5efc2d.svg'); // build用
          }
        }
        .icon0,.icon1,.icon2,.icon3 {
          width: 64px;
          height: 64px;
          @include TV {
            width: 74px;
            height: 74px;
          }
          @include noteBook {
            width: 48px;
            height: 48px;
          }
        }
        .icon0 {
          // background-image: url('~@/assets/images/icon/home/normal.svg');
          background-image: url('/img/normal.88acfe2f.svg'); // build用
          background-size: 100%;
          &:hover {
            // background-image: url('~@/assets/images/icon/home/selected.svg');
            background-image: url('/img/selected.bed7e0fe.svg'); // build用
          }
        }
        .icon01 {
          // background-image: url('~@/assets/images/icon/home/selected.svg');
          background-image: url('/img/selected.bed7e0fe.svg'); // build用
        }
        .icon1 {
          // background-image: url('~@/assets/images/icon/view/normal.svg');
          background-image: url('/img/normal.335347b3.svg'); // build用
          background-size: 100%;
          &:hover {
            // background-image: url('~@/assets/images/icon/view/selected.svg');
            background-image: url('/img/selected.6dc7b020.svg'); // build用
          }
        }
        .icon2 {
          // background-image: url('~@/assets/images/icon/subscribe/normal.svg');
          background-image: url('/img/normal.e885c2b6.svg'); // build用
          background-size: 100%;
          &:hover {
            // background-image: url('~@/assets/images/icon/subscribe/selected.svg');
            background-image: url('/img/selected.64802068.svg'); // build用
          }
        }
        .icon3 {
          // background-image: url('~@/assets/images/icon/store/normal.svg');
          background-image: url('/img/normal.b9378c31.svg'); // build用
          background-size: 100%;
          &:hover {
            // background-image: url('~@/assets/images/icon/store/selected.svg');
            background-image: url('/img/selected.eb5efc2d.svg'); // build用
          }
        }
        .icon04 {
          // background-image: url('~@/assets/images/icon/store/selected.svg');
          background-image: url('/img/selected.eb5efc2d.svg'); // build用
        }
        .username {
          font-size: 21px;
          color: $gray;
          text-align: center;
          font-weight: 400;
          margin-top: 8px;
          @include TV {
            font-size: 26px;
          }
        }
        img {
          width: 100%;
        }
      }
      .logout {
        position: relative;
        bottom: 32px;
        display: flex;
        align-items: center;
        // margin-top: 90px;
        margin-top: 50%;
        cursor: pointer;
        .icon {
          width: 32px;
          height: 32px;
          img {
            width: 100%;
          }
        }
        span {
          font-size: 16px;
          color: $gray;
          letter-spacing: 1.52px;
          text-align: center;
          font-weight: 400;
          margin-left: 12px;
        }
        @include TV {
          .icon {
           width: 64px;
            height: 64px;
          }
          span {
            font-size: 26px;
          }
        }
      }
    }
    .contnet {
      position: relative;
      width: 100%;
      // height: 100%;
      // position: absolute;
      // top: 80px;
      // left: 0;
      // bottom: 0;
      // padding-left: 60px;
      // padding-bottom: 60px;
      // overflow: hidden;
      // overflow-y: auto;
      background-color: #f1f5f8;
      // border: 1px solid red;
      // @include noteBook {
      //   width: 90%;
      // }
    }
  }
</style>
