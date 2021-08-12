import Vue from 'vue';
import Vuex from 'vuex';
import * as service from '@/service/webAPI.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mask: false,
    view: false,
    sec: false,
    marquee: '',
    bottomImg: '',
    YoutuArr: null,
  },
  mutations: {
    SET_MASK: (state, data) => {
      state.mask = data;
    },
    OPEN_VIEW: (state, data) => {
      state.view = data;
    },
    OPEN_SEC: (state, data) => {
      state.sec = data;
    },
    GET_MARQUEE: (state, data) => {
      state.marquee = data;
    },
    GET_BOTMIMG: (state, data) => {
      state.bottomImg = data;
    },
    GET_YOUTUBE: (state, data) => {
      state.YoutuArr = data;
    },
  },
  actions: {
    getYoutube({ commit }) {
      service
        .getVideos()
        .then((res) => {
          console.log('get Video: ', res.data);
          let vid1 = res.data.video1.match(/[^/]*$/)[0];
          let vid2 = res.data.video2.match(/[^/]*$/)[0];
          let vid3 = res.data.video3.match(/[^/]*$/)[0];
          let vid4 = res.data.video4.match(/[^/]*$/)[0];
          let vid5 = res.data.video5.match(/[^/]*$/)[0];
          let vid6 = res.data.video6.match(/[^/]*$/)[0];
          let vid7 = res.data.video7.match(/[^/]*$/)[0];
          let vid8 = res.data.video8.match(/[^/]*$/)[0];
          let videoArr = [vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8];
          commit('GET_YOUTUBE', videoArr);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
