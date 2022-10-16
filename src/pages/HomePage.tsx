import { FC } from 'react';
import { Banner, Cards } from '../components';

const bannerProp = {
  title: '选条路喔',
  description: '点击任何一条路嚟开始英语之旅',
};

export const HomePage: FC = () => {
  return (
    <div className="flex flex-col justify-center w-full h-[calc(100%-80px)] overflow-auto overflow-x-hidden bg-primary-black">
      <div className="flex justify-center bg-primary-black">
        <Banner title={bannerProp.title} description={bannerProp.description} />
      </div>
      <Cards />
    </div>
  );
};
