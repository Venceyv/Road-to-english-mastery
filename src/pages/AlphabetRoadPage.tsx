import { FC } from 'react';
import { Alphabets, BackButton, Banner, Footer } from '../components';
import { BannerProp } from '../components/Banner/Banner';

const bannerProp: BannerProp = {
  title: '按一个卡',
  description: '学发音， 试试按任何一个卡片',
};

const AlphabetRoadPage: FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-[calc(100%-56px)] overflow-auto bg-primary-black">
      <div className="flex w-full justify-start p-2 pb-0">
        <BackButton />
      </div>
      <Banner title={bannerProp.title} description={bannerProp.description} />
      <Alphabets />
      <div className="w-full justify-end">
        <Footer />
      </div>
    </div>
  );
};

export default AlphabetRoadPage;
