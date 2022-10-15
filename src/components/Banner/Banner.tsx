import { FC } from 'react';

export const Banner: FC = () => {
  return (
    <div className="relative flex items-center rounded-md w-fit mt-2">
      <div className="h-fit font-bold text-md text-center text-white">
        点击任何一条路嚟
        <br className="md:hidden" />
        开始英语之旅
      </div>
      <div className="relative">
        <img src="./src/assets/img/pick.png" alt="pick" className="w-[120px] h-[120px] top-2 rotate-[-20deg]" />
        <p className="absolute font-bold text-sm text-black top-[72px] left-[57px] rotate-[-26deg]">选条路喔</p>
      </div>
    </div>
  );
};
