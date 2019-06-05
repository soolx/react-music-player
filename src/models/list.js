import exampleMusic from '@/config/example_music';

export default {
  state: {
    playList: [...exampleMusic],
  },
  reducers: {
    // update(state) {
    //   return `${state}_list`;
    // },
  },
  effects: {
    // *fetch({ type, payload }, { put, call, select }) {
    // },
  },
};
