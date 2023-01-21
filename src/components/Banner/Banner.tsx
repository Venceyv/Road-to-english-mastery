import { FC } from 'react';

export interface BannerProp {
  title: string;
  description: string;
}

export const Banner: FC<BannerProp> = ({ title, description }): JSX.Element => {
  return (
    <div className="relative flex w-fit items-center rounded-md pt-2 md:scale-110">
      <div className="text-md h-fit text-center font-bold text-white">{description}</div>
      <div className="relative">
        <img
          src="../../assets/img/pick.png"
          alt="pick"
          className="top-2 h-[120px] w-[120px] rotate-[-20deg]"
        />
        <p className="absolute top-[72px] left-[57px] rotate-[-26deg] text-sm font-bold text-black">
          {title}
        </p>
      </div>
    </div>
  );
};
