import { FC } from 'react';
import { CardProp } from '../../interfaces/CardProp';
import { useNavigate } from 'react-router-dom';

export const Card: FC<CardProp> = ({ picture, cardInfo }) => {
  const navigate = useNavigate();

  const navigateRoute = () => {
    return () => navigate(`road-${cardInfo.path}`);
  };
  return (
    <div
      onClick={navigateRoute()}
      className="flex justify-center items-center group min-w-[315px] w-full gap-3 px-6 md:px-10 cursor-pointer last:mt-6"
    >
      <img
        src={`${picture.src}`}
        alt="Card picture"
        className="w-[78px] h-[78px] rounded-full border-2 transition ease-in-out group-hover:border-primary-green bg-white"
      />

      <div className="flex flex-col justify-center p-2 rounded-md border-2 min-w-[225px] w-full transition ease-in-out group-hover:border-primary-green bg-secondary-black">
        <h1 className="text-white font-bold text-md">{cardInfo.title}</h1>
        <p className="text-zinc-400 font-bold text-sm">{cardInfo.description}</p>
      </div>
    </div>
  );
};
