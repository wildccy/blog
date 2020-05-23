import {getHola} from '../api'

export default {

  namespace: 'information',

  state: {
    hola:[]
  },

  effects: {
    *hola({ payload }, { call, put }) {  // eslint-disable-line
      const hola = yield call(getHola);
      console.log(hola);

      yield put({
        type: 'save',
        payload: {hola}
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
