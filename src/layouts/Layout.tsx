import { FC } from 'react';
import { Footer, NavBar } from '../components';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-full h-full min-w-[345px] bg-primary-black">
      <NavBar />
      <Outlet />
      {pathname !== '/road-alphabet' && <Footer />}
    </div>
  );
};
