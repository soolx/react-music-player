// const prefix = 'http://source.soolx.top/music/mp3';
const prefix = 'http://resource.soolx.top/music/';

export interface MusicItemType {
  name: string;
  artist: string;
  url: string;
}

const exampleMusic: Array<MusicItemType> = [
  {
    name: 'Lemon',
    artist: '米津玄师',
    url: `${prefix}/%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%20-%20Lemon.mp3`,
  },
  {
    name: '没什么大不了',
    artist: 'RADWIMPS',
    url: `${prefix}/RADWIMPS%20-%20%E6%B2%A1%E4%BB%80%E4%B9%88%E5%A4%A7%E4%B8%8D%E4%BA%86.mp3`,
  },
  {
    name: 'Dearest',
    artist: '滨崎步',
    url: `${prefix}/%E6%BB%A8%E5%B4%8E%E6%AD%A5%20-%20Dearest.mp3`,
  },
  {
    name: 'Secret',
    artist: '滨崎步',
    url: `${prefix}/%E6%BB%A8%E5%B4%8E%E6%AD%A5%20-%20Dearest.mp3`,
  },
];

export default exampleMusic;
