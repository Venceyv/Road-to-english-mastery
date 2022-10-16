import { FC } from 'react';
import { Card } from '../index';
import { cards } from '../../data/cards';

export const Cards: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-start items-center pt-12 h-[calc(100%-184px)] bg-primary-black">
      {cards.map((card, index) => {
        return <Card key={index} picture={card.picture} cardInfo={card.cardInfo} />;
      })}
    </div>
  );
};
