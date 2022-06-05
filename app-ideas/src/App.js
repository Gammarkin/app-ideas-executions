import React from 'react';
import Tier1Routes from './components/Tier1Routes';
import MainRoutes from './components/MainRoutes';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div>
      <MainRoutes />
      <Tier1Routes />
      <Outlet />
    </div>
  );
}

export default App;
