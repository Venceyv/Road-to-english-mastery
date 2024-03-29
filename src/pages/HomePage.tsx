import { FC } from 'react';
import { Banner, Cards } from '../components';

const bannerProp = {
  title: '选条路喔',
  description: '点击任何一条路嚟开始英语之旅',
};

const HomePage: FC = () => {
  return (
    <div className="flex h-[calc(100%-56px)] w-full flex-col justify-center overflow-auto overflow-x-hidden bg-primary-black">
      <div className="flex justify-center bg-primary-black">
        <Banner title={bannerProp.title} description={bannerProp.description} />
      </div>
      <Cards />
    </div>
  );
};

export default HomePage;
