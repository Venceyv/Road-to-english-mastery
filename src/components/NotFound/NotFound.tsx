import { FC } from 'react';

export const NotFound: FC = (): JSX.Element => {
  return (
    <>
      <img src="../../assets/img/404.png" alt="404-not-found" className="max-w-[375px] max-h-[291px] rounded-full bg-white" />

      <h1 className="font-bold text-5xl text-center text-white">
        404 <br />
        揾唔到， 返去啊
      </h1>
    </>
  );
};
