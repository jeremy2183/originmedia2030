import { api } from './base';

//取得影片
export const getVideo = (payload) => {
  return api.get(`randomvideo/${payload}`);
};

//取得8支影片
export const getVideos = () => {
  return api.get('mainpage_random_video');
};

//取得跑馬燈和廣告
export const getMaq_IMG = (payload) => {
  return api.get(`randomvideo/${payload}`);
};
