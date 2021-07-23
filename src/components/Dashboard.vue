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
              <div :class="`icon${index}`"></div>
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
      padding: 32px 0;
      // padding-bottom: 850px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .user {
        .icon {
          width: 40px;
          height: 40px;
          margin: auto;
          border-radius: 25px;
          text-align: center;
          background: #d8d8d8;
          padding-top: 5px;
          svg {
            width: 80%;
            height: 80%;
            color: #828282;
          }
        }
        .username {
          font-size: 14px;
          color: $gray;
          text-align: center;
          font-weight: 400;
          margin-top: 8px;
        }
      }
      .view {
        margin-top: 64px;
        ul {
          li {
            &:not(:nth-of-type(1)) {
              margin-top: 60px;
            }
            &:hover {
              cursor: pointer;
            }
          }
        }
        .router-link-exact-active {
          .icon0 {
            background-image: url('~@/assets/images/icon/home/selected.svg');
          }
          .icon1 {
            background-image: url('~@/assets/images/icon/view/selected.svg');
          }
          .icon2 {
            background-image: url('~@/assets/images/icon/subscribe/selected.svg');
          }
          .icon3 {
            background-image: url('~@/assets/images/icon/store/selected.svg');
          }
        }
        .icon0 {
          width: 64px;
          height: 64px;
          background-image: url('~@/assets/images/icon/home/normal.svg');
          background-size: 100%;
          &:hover {
            background-image: url('~@/assets/images/icon/home/selected.svg');
          }
        }
        .icon1 {
          width: 64px;
          height: 64px;
          background-image: url('~@/assets/images/icon/view/normal.svg');
          background-size: 100%;
          &:hover {
            background-image: url('~@/assets/images/icon/view/selected.svg');
          }
        }
        .icon2 {
          width: 64px;
          height: 64px;
          background-image: url('~@/assets/images/icon/subscribe/normal.svg');
          background-size: 100%;
          &:hover {
            background-image: url('~@/assets/images/icon/subscribe/selected.svg');
          }
        }
        .icon3 {
          width: 64px;
          height: 64px;
          background-image: url('~@/assets/images/icon/store/normal.svg');
          background-size: 100%;
          &:hover {
            background-image: url('~@/assets/images/icon/store/selected.svg');
          }
        }
        .username {
          font-size: 21px;
          color: $gray;
          text-align: center;
          font-weight: 400;
          margin-top: 8px;
        }
        img {
          width: 100%;
        }
      }
      .logout {
        display: flex;
        align-items: center;
        margin-top: 90px;
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
    }
  }
</style>
