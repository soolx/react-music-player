
export default {
  state: {
    isPlay: false,
    selected: 0,
    timeDuration: 1,
    currentTime: 0,
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    // },
  },
  reducers: {
    saveStatus(state, { payload }) {
      return {
        ...state,
        isPlay: payload,
      };
    },
    saveSelected(state, { payload }) {
      return {
        ...state,
        selected: payload,
      };
    },
    saveTimeDuration(state, { payload }) {
      return {
        ...state,
        timeDuration: payload,
      };
    },
    saveCurrentTime(state, { payload }) {
      return {
        ...state,
        currentTime: payload,
      };
    },
  },
  effects: {
    * nextSong(_, { put, select }) {
      const { selected, playList } = yield select((store) => ({
        selected: store.player.selected,
        playList: store.list.playList,
      }));
      yield put({
        type: 'saveSelected',
        payload: selected < (playList.length - 1) ? selected + 1 : 0,
      });
    },
    * prevSong(_, { put, select }) {
      const { selected, playList } = yield select((store) => ({
        selected: store.player.selected,
        playList: store.list.playList,
      }));
      yield put({
        type: 'saveSelected',
        payload: selected > 0 ? selected - 1 : playList.length - 1,
      });
    },
    * changePlayStatus(_, { put, select }) {
      const isPlay = yield select((store) => store.player.isPlay);
      yield put({
        type: 'saveStatus',
        payload: !isPlay,
      });
    },
  },
};
