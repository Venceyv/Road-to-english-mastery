import { FC } from 'react';

interface BannerProp {
  title: string;
  hint: string;
}

export const Banner: FC<BannerProp> = ({ title, hint }) => {
  return (
    <div className="flex flex-col items-center rounded-md w-fit p-2 mt-4 bg-secondary-black">
      <div className="font-bold text-md text-white">
        <span className="text-indigo-300"> * </span>
        {title}
        <span className="text-indigo-300"> * </span>
      </div>
      <div className="font-bold text-md text-white pt-3">
        <span className="text-indigo-300"> &gt;&gt; </span>
        {hint}
        <span className="text-indigo-300"> &lt;&lt; </span>
      </div>
    </div>
  );
};
