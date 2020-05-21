import { request } from '../../utils/request';

export default {
  namespace: 'hola',
  state: {},
  reducers: {
    save(state, action) {
      state = action.payload;
      return state;
    },
  },
  effects: {
    *get(action, { call, put }) {

      const raw = yield call(() => request(`http://62.234.70.207:7300/mock/5ec5f4a1e61c4a24ea6f0a98/blog/hola`));

      console.log(raw);

      return

      yield put({
        type: 'save',
        payload: data,
      });
    },
  },
};
