import { FC } from 'react';
import { Alphabet } from '../components';

export const AlphabetRoadPage: FC = () => {
  return (
    <div className="bg-primary-black w-full h-[calc(100%-56px)]">
      <Alphabet />;
    </div>
  );
};
