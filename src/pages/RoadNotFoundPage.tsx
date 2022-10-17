import { FC } from 'react';
import { BackButton, RoadNotFound } from '../components/index';

const RoadNotFoundPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full h-[calc(100%-80px)] pb-28 bg-primary-black">
      <RoadNotFound />
      <BackButton />
    </div>
  );
};

export default RoadNotFoundPage;
