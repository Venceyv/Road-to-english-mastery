import { FC } from 'react';
import { Alphabets, BackButton, Banner } from '../components';
import { BannerProp } from '../components/Banner/Banner';

const bannerProp: BannerProp = {
  title: '按一个卡',
  description: '学发音， 试试按任何一个卡片',
};

const AlphabetRoadPage: FC = () => {
  return (
    <div className="flex h-[calc(100%-56px)] w-full flex-col items-center justify-start overflow-auto bg-primary-black pb-1">
      <div className="flex w-full justify-start p-2 pb-0">
        <BackButton />
      </div>
      <Banner title={bannerProp.title} description={bannerProp.description} />
      <Alphabets />
    </div>
  );
};

export default AlphabetRoadPage;
