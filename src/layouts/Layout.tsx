import { FC } from 'react';
import { NavBar } from '../components';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-full w-full min-w-[330px] bg-primary-black">
      <NavBar />
      <Outlet />
    </div>
  );
};
