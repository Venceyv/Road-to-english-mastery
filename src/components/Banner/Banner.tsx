import { FC } from 'react';

export interface BannerProp {
  title: string;
  description: string;
}

export const Banner: FC<BannerProp> = ({ title, description }): JSX.Element => {
  return (
    <div className="relative flex items-center rounded-md w-fit pt-2">
      <div className="h-fit font-bold text-md text-center text-white">{description}</div>
      <div className="relative">
        <img src="./src/assets/img/pick.png" alt="pick" className="w-[120px] h-[120px] top-2 rotate-[-20deg]" />
        <p className="absolute font-bold text-sm text-black top-[72px] left-[57px] rotate-[-26deg]">{title}</p>
      </div>
    </div>
  );
};
