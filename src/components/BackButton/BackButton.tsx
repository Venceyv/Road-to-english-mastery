import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const navigateBack = () => {
    return () => navigate('/');
  };

  return (
    <button type="button" onClick={navigateBack()} className="flex items-center gap-2">
      <img src="./src/assets/img/backArrow.svg" alt="back-arrow" className="h-[40px] w-[40px]" />
      <h1 className="font-bold text-md text-center text-white">点我嚟返回</h1>
    </button>
  );
};
