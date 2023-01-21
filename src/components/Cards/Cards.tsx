import { FC } from 'react';
import { Card } from '../index';
import { cards } from '../../data/cards';
export const Cards: FC = (): JSX.Element => {
  return (
    <div
      className="flex h-[calc(100%-184px)] flex-col flex-wrap items-center justify-start gap-4 bg-primary-black pt-12 md:flex-row
    md:items-start md:justify-center"
    >
      {cards.map((card, index) => {
        return <Card key={index} picture={card.picture} cardInfo={card.cardInfo} />;
      })}
    </div>
  );
};
