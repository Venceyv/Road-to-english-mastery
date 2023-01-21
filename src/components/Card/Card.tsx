import { FC } from 'react';
import { CardProp } from '../../interfaces/CardProp';
import { useNavigate } from 'react-router-dom';

export const Card: FC<CardProp> = ({ picture, cardInfo }): JSX.Element => {
  const navigate = useNavigate();

  const navigateRoute = () => {
    return () => navigate(`road-${cardInfo.path}`);
  };
  return (
    <div
      onClick={navigateRoute()}
      className="group flex w-full min-w-[315px] cursor-pointer items-center justify-center gap-3 px-5 transition ease-in-out last:mt-6 md:max-h-[400px] md:w-1/2 md:max-w-[250px] md:flex-col md:rounded-md md:border-none md:p-4 md:last:mt-0 md:hover:scale-105 md:hover:shadow md:hover:shadow-primary-green"
    >
      <img
        src={`${picture.src}`}
        alt="Card picture"
        className="h-[78px] w-[78px] rounded-full border-2 bg-white transition ease-in-out group-hover:border-primary-green md:h-[80%] md:w-full md:rounded-md md:border-none"
      />

      <div className="flex w-full min-w-[225px] flex-col justify-center rounded-md border-2 bg-secondary-black p-2 transition ease-in-out group-hover:border-primary-green md:h-auto md:border-none">
        <h1 className="text-md font-bold text-white">{cardInfo.title}</h1>
        <p className="text-sm font-bold text-zinc-400">{cardInfo.description}</p>
      </div>
    </div>
  );
};
