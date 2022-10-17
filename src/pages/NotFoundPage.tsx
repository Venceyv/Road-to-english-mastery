import { FC } from 'react';
import { BackButton, NotFound } from '../components/index';

const NotFoundPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full h-full pb-20 bg-primary-black">
      <NotFound />
      <BackButton />
    </div>
  );
};

export default NotFoundPage;
