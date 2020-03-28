import exampleMusic, { MusicItemType } from '@/config/example_music';

export interface ListModelState {
  playList: Array<MusicItemType>;
}

export interface ListModelType {
  namespace: 'list';
  state: ListModelState;
  reducers: {};
  effects: {};
}

const ListModel: ListModelType = {
  namespace: 'list',
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

export default ListModel;
