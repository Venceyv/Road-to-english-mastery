import { FC } from 'react';
import { CardProp } from '../interfaces/CardProp';

export const Card: FC<CardProp> = ({ picture, cardInfo }) => {
  return (
    <div className="flex justify-center items-center w-full gap-3 cursor-pointer">
      {picture.isPicture && (
        <img src={`${picture.src}`} alt="Card picture" className="w-14 h-14 rounded-full border-2 p-1" />
      )}
      <div className="flex flex-col justify-center p-2 rounded-md border-2  bg-secondary-black">
        <h1 className="text-white font-bold text-md">{cardInfo.title}</h1>
        <p className="text-zinc-400 font-bold text-sm">{cardInfo.description}</p>
      </div>
    </div>
  );
};
