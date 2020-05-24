import { getHola, getLife, getToy, sendMessage } from '../api'
import queryString from 'query-string';

export default {

  namespace: 'information',

  state: {
    hola:[],
    life:{},
    toy:{},
    id:''
  },

  effects: {
    *hola({}, { call, put }) {
      const {data:{data:hola}} = yield call(getHola);
      yield put({
        type: 'load',
        payload: {hola}
      });
    },
    *life({payload},{ call, put }){
      const {data:{data:life}} = yield call(getLife);
      yield put({
        type: 'load',
        payload: {life}
      })
    },
    *toy({payload},{ call, put }){
      const {data:{data:toy}} = yield call(getToy);
      yield put({
        type: 'load',
        payload: {toy}
      })
    },
    *mails({payload},{call,put}){
        const { subject, text } = payload;
        const Query = queryString.stringify({ subject, text });
        yield call(sendMessage);
        yield put({
          type: 'load',
          payload: {id:'<20200524044507.1.1DD90D4484616585@mailgun.canisminor.cc>'}
        })
      }
  },

  reducers: {
    load(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
