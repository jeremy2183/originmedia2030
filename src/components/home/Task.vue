<template>
  <div class="task">
    <div class="top">
      <div
        class="back"
        @click="back"
      >
        <i class="fas fa-chevron-left"></i>
        <div class="text">返回</div>
      </div>
      <div class="urlbox">
        <div class="editbox">
          <div class="addUrl">
            <div class="border">
              <div>
                <input
                  class="input"
                  type="text"
                  placeholder="輸入YouTube影片"
                >
                <hr class="hr">
                <p>最多只支援3個任務同時執行，任務完成請刪除加入VIP任務上限25個</p>
              </div>
              <button @click="addVideo">新增</button>
            </div>
          </div>
          <div
            class="edit"
            v-if="!editState"
            @click="edit"
          >
            <div class="icon"></div>
            <div class="text">編輯</div>
          </div>
          <div
            class="editing"
            v-if="editState"
          >
            <div
              class="complete"
              @click="removeYoutu"
            >
              <div class="icon"></div>
              <div class="text">完成</div>
            </div>
            <div
              class="cancle"
              @click="cancle"
            >
              <div class="icon"></div>
              <div class="text">取消</div>
            </div>
          </div>
        </div>
        <div class="videobox">
          <div
            class="box"
            v-for="youtu in youtube"
            :key="youtu.id"
          >
            <div class="video">
              <div class="view"></div>
              <div class="info">
                <span>觀看秒數：{{ youtu.sec }}</span>
                <div>
                  <div class="icon"></div>
                  <span>{{youtu.view}}/{{ youtu.view }} 觀看</span>
                </div>
                <span>{{ youtu.date }}</span>
              </div>
            </div>
            <div
              class="garbage"
              v-if="editState"
              @click="selectYoutu(youtu)"
            >
              <div v-show="!youtu.completed">
                <i class="fas fa-trash-alt gray"></i>
              </div>
              <div v-show="youtu.completed">
                <i class="fas fa-trash-alt red"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="advertise">
      <div class="box"></div>
      <div class="logo"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        editState: false,
        selected: false,
        youtube: [
          {
            id: 1,
            sec: 600,
            view: 32,
            date: '2020-07-1002:47:35 (UTC)',
            completed: false,
          },
          {
            id: 2,
            sec: 600,
            view: 32,
            date: '2020-08-1002:47:35 (UTC)',
            completed: false,
          },
          {
            id: 3,
            sec: 600,
            view: 32,
            date: '2020-09-1002:47:35 (UTC)',
            completed: false,
          },
          // {
          //   id: 4,
          //   sec: 600,
          //   view: 32,
          //   date: '2020-09-1002:47:35 (UTC)',
          // },
          // {
          //   id: 5,
          //   sec: 600,
          //   view: 32,
          //   date: '2020-09-1002:47:35 (UTC)',
          // },
          // {
          //   id: 6,
          //   sec: 600,
          //   view: 32,
          //   date: '2020-09-1002:47:35 (UTC)',
          // },
          // {
          //   id: 7,
          //   sec: 600,
          //   view: 32,
          //   date: '2020-09-1002:47:35 (UTC)',
          // },
          // {
          //   id: 8,
          //   sec: 600,
          //   view: 32,
          //   date: '2020-09-1002:47:35 (UTC)',
          // },
        ],
      };
    },
    methods: {
      back() {
        this.$router.push('/home');
      },
      addVideo() {
        console.log('新增');
      },
      edit() {
        console.log('編緝');
        this.editState = true;
      },
      completed() {
        this.editState = false;
      },
      cancle() {
        this.editState = false;
      },
      selectYoutu(item) {
        console.log('item: ', item);
        item.completed = !item.completed;
      },
      removeYoutu() {
        // this.youtube.forEach(function(item, index, arr) {
        //   if (item.completed === true) {
        //     arr.splice(index, );
        //   }
        // });

        var newIndex = this.youtube.findIndex(item => item.completed === true);
        if (newIndex == -1) {
          alert('請選擇要刪除的項目');
          this.editState = false;
          return;
        }
        this.youtube.splice(newIndex, 1);
        this.editState = false;
      },
    },
    computed: {
      // selectNow() {
      //   return this.youtube.forEach(item => {
      //     return item.completed;
      //   });
      // },
    },
  };
</script>
<style lang="scss" scoped>
  .task {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @include noteBook {
      height: calc(150vh - 80px);
    }
    .top {
      width: 100%;
      display: flex;
      padding-bottom: 100px;
      .back {
        width: 144px;
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
      .urlbox {
        width: 100%;
        .editbox {
          display: flex;
          align-items: flex-end;
          .addUrl {
            width: 860px;
            height: 144px;
            background: #ffffff;
            border: 6px solid #ffffff;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
            border-radius: 22.8px;
            margin-top: 1.9%;
            margin-left: 12.9%;
            @include noteBook {
              margin-left: 3%;
            }
            .border {
              width: 850px;
              height: 134px;
              display: flex;
              justify-content: space-around;
              align-items: center;
              background: #ffffff;
              border: 2px solid #c62828;
              border-radius: 22.8px;
              .input {
                position: relative;
                border: none;
                outline: none;
                top: -5px;
                font-size: 20px;
                color: #7f7f7f;
                font-weight: 400;
              }
              .hr {
                width: 600px;
                height: 3px;
                opacity: 0.45;
                background: #7e7e7e;
              }
              button {
                width: 84px;
                height: 40px;
                color: #000;
                background: #bbb;
                border-radius: 6px;
                border: 0;
                font-size: 16px;
                font-weight: 550;
                cursor: pointer;
              }
              p {
                font-size: 16px;
                color: $autoPlay;
                font-weight: 400;
                margin-top: 10.2px;
              }
            }
          }
          .edit {
            width: 80px;
            height: 40px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: #e53935;
            box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);
            border-radius: 5px;
            margin-left: 1.3%;
            padding: 0 5px;
            cursor: pointer;
            .icon {
              width: 20px;
              height: 20px;
              background-image: url('~@/assets/images/icon/edit.svg');
            }
            .text {
              font-size: 16px;
              color: #ffffff;
              text-align: center;
              font-weight: 500;
            }
          }
          .editing {
            display: flex;
            width: 210px;
            justify-content: center;
            .complete {
              width: 80px;
              height: 40px;
              display: flex;
              justify-content: space-around;
              align-items: center;
              background: #e53935;
              box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);
              border-radius: 5px;
              margin-left: 1.3%;
              margin-right: 6px;
              padding: 0 5px;
              cursor: pointer;
              .icon {
                width: 20px;
                height: 20px;
                background-color: #fff;
                mask-image: url('~@/assets/images/icon/Check2.svg');
              }
              .text {
                font-size: 16px;
                color: #ffffff;
                text-align: center;
                font-weight: 500;
              }
            }
            .cancle {
              width: 80px;
              height: 40px;
              display: flex;
              justify-content: space-around;
              align-items: center;
              background: #fff;
              box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);
              border-radius: 5px;
              margin-left: 1.3%;
              padding: 0 5px;
              cursor: pointer;
              .icon {
                width: 20px;
                height: 20px;
                background-color: #8a8a8a;
                mask-image: url('~@/assets/images/icon/cross.svg');
              }
              .text {
                font-size: 16px;
                color: #8a8a8a;
                text-align: center;
                font-weight: 500;
              }
            }
          }
        }
        .videobox {
          padding-top: 2.2%;
          margin-left: 12.9%;
          @include noteBook {
            margin-left: 3%;
          }
          .box {
            display: flex;
            margin-bottom: 12px;
            .video {
              width: 860px;
              height: 106px;
              display: flex;
              overflow: hidden;
              background: #ffffff;
              box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);
              border-radius: 5px;
              .view {
                width: 136px;
                height: 106px;
                background: #000;
              }
              .info {
                width: 100%;
                height: 106px;
                background: #fff;
                display: flex;
                justify-content: space-around;
                align-items: center;
                div {
                  display: flex;
                  .icon {
                    width: 24px;
                    height: 24px;
                    background: url('~@/assets/images/icon/Check.svg') no-repeat center center;
                    margin-right: 5px;
                  }
                }
                span {
                  font-size: 18px;
                  color: #7f7f7f;
                  font-weight: 500;
                }
              }
            }
            .garbage {
              position: relative;
              left: 30px;
              align-self: center;
              cursor: pointer;
              .gray {
                font-size: 22px;
                color: gray;
              }
              .red {
                font-size: 22px;
                color: $mainRed;
              }
              // svg {
              //   font-size: 22px;
              //   color: gray;
              //   &.active {
              //     color: $mainRed;
              //   }
              // }
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
        @include noteBook {
          width: 280px;
        }
      }
    }
  }
</style>
