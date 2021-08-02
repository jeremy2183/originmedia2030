import { api } from './base';

//取得影片
export const getVideo = (payload) => {
  return api.get(`randomvideo/${payload}`);
};
