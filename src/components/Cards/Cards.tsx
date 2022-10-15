import { FC } from 'react';
import { Card } from '../index';
import { cards } from '../../data/cards';

export const Cards: FC = () => {
  return (
    <div className="flex flex-col justify-start items-center pt-12 h-[calc(100%-184px)] bg-primary-black">
      {cards.map((card) => {
        return <Card picture={card.picture} cardInfo={card.cardInfo} />;
      })}
    </div>
  );
};
