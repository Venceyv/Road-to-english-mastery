import { FC } from 'react';
import { NavBar } from '../components';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
