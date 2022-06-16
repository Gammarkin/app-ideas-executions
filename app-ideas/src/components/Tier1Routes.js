import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Bin2Dec from '../pages/tier1/Bin2Dec';
import BorderRadius from '../pages/tier1/BorderRadius';
import Calculator from '../pages/tier1/Calculator';
import ChristmasLights from '../pages/tier1/ChristmasLights';
import CauseEffect from '../pages/tier1/CauseEffect';
import CauseEffectEspecifics from '../pages/tier1/CauseEffectEspecifics';
import ColorCycle from '../pages/tier1/ColorCycle';
import CSV2JSON from '../pages/tier1/CSV2JSON';
import DolarToCents from '../pages/tier1/DolarToCents';
import GithubStatus from '../pages/tier1/GithubStatus';

export default class Tier1Routes extends Component {
  render() {
    return (
      <div>
        <Routes>
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
          <Route path="/csv2json" element={<CSV2JSON />} />
          <Route path="/dolar-to-cents" element={<DolarToCents />} />
          <Route path="/gh-status" element={<GithubStatus />} />
        </Routes>
      </div>
    );
  }
}
