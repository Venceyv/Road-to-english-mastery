import { FC } from 'react';

export const Footer: FC = (): JSX.Element => {
  return (
    <footer className="flex justify-end h-fit pr-2 text-white bg-primary-black">
      <div className="font-bold font-virgil">By:</div>
      <div className="font-bold"> &nbsp; 憨堡厚米(Venceyv)</div>
    </footer>
  );
};
