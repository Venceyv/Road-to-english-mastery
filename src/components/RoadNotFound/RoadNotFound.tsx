import { FC } from 'react';

export const RoadNotFound: FC = (): JSX.Element => {
  return (
    <>
      <img src="./src/assets/img/roadNotFound.png" alt="road-not-found" className="w-[355px] h-[359px]" />
      <h1 className="font-bold text-4xl text-center text-white">喂！ 呢度冇路咯 出去</h1>
    </>
  );
};
