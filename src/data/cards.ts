import { CardProp } from '../interfaces/CardProp';

export const cards: CardProp[] = [
  {
    picture: {
      src: './src/assets/img/easyCard.png',
    },
    cardInfo: {
      path: 'alphabet',
      title: '字母发音の路',
      description: '学会字母发音, 叼。。。洒洒水啦',
    },
  },

  {
    picture: {
      src: './src/assets/img/searchCard.png',
    },
    cardInfo: {
      path: 'not-found',
      title: '揾路中。。。',
      description: '唔好过嚟啊 呢边冇路',
    },
  },
];
