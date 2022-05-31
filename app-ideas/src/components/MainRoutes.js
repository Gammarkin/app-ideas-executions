import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Tier1 from '../pages/main-pages/Tier1';
import Tier2 from '../pages/main-pages/Tier2';
import Tier3 from '../pages/main-pages/Tier3';
import Home from '../pages/main-pages/Home';

export default class MainRoutes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/app-ideas-executions/" element={<Home />} />
          <Route path="/tier1" element={<Tier1 />} />
          <Route path="/tier2" element={<Tier2 />} />
          <Route path="/tier3" element={<Tier3 />} />
        </Routes>
      </div>
    );
  }
}
