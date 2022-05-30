import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Tier1 from '../pages/main-pages/Tier1';
import Tier2 from '../pages/main-pages/Tier2';
import Tier3 from '../pages/main-pages/Tier3';
import Home from '../pages/main-pages/Home';
import Bin2Dec from '../pages/tier1/Bin2Dec';
import BorderRadius from '../pages/tier1/BorderRadius';
import Calculator from '../pages/tier1/Calculator';
import ChristmasLights from '../pages/tier1/ChristmasLights';
import CauseEffect from '../pages/tier1/CauseEffect';
import CauseEffectEspecifics from '../pages/tier1/CauseEffectEspecifics';
import ColorCycle from '../pages/tier1/ColorCycle';

export default class Tier1Routes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/app-ideas-executions/" element={<Home />} />
          <Route path="/tier1" element={<Tier1 />} />
          <Route path="/tier2" element={<Tier2 />} />
          <Route path="/tier3" element={<Tier3 />} />
          <Route path="/bin2dec" element={<Bin2Dec />} />
          <Route path="/borderRadious" element={<BorderRadius />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/xmas-lights" element={<ChristmasLights />} />
          <Route path="/cause-effect" element={<CauseEffect />} />
          <Route
            path="/cause-effect/especifics/:id"
            element={<CauseEffectEspecifics />}
          />
          <Route path="/color-cycle" element={<ColorCycle />} />
        </Routes>
      </div>
    );
  }
}
