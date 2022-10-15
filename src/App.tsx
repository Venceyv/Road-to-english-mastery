import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Layout } from './layouts/Layout';
import { NotFoundPage } from './pages/NotFoundPage';
import { RoadNotFoundPage } from './pages/RoadNotFoundPage';
import { AlphabetRoadPage } from './pages/AlphabetRoadPage';
import './App.css';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="road-alphabet" element={<AlphabetRoadPage />} />
          <Route path="road-not-found" element={<RoadNotFoundPage />} />
          {/* <Route path="alphabet-road" element={} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
