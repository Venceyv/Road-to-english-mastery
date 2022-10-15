import { FC } from 'react';
import { Banner, Cards } from '../components';

export const HomePage: FC = () => {
  return (
    <>
      <div className="flex justify-center bg-primary-black">
        <Banner />
      </div>
      <Cards />
    </>
  );
};
