import { FC, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import AlphabetRoadPage from './pages/AlphabetRoadPage';
import './App.css';

const HomePage: FC = lazy(() => import('./pages/HomePage'));
const RoadNotFoundPage: FC = lazy(() => import('./pages/RoadNotFoundPage'));
const NotFoundPage: FC = lazy(() => import('./pages/NotFoundPage'));

const App: FC = () => {
  return (
    <>
      <Suspense fallback={<div className="text-lg font-bold text-white bg-primary-black">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="road-alphabet" element={<AlphabetRoadPage />} />
            <Route path="road-not-found" element={<RoadNotFoundPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
