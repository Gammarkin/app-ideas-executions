import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
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
        <Switch>
          <Route exact path="/app-ideas-executions/" component={Home} />
          <Route exact path="/tier1" component={Tier1} />
          <Route exact path="/tier2" component={Tier2} />
          <Route exact path="/tier3" component={Tier3} />
          <Route exact path="/bin2dec" component={Bin2Dec} />
          <Route exact path="/borderRadious" component={BorderRadius} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/xmas-lights" component={ChristmasLights} />
          <Route exact path="/cause-effect" component={CauseEffect} />
          <Route
            exact
            path="/cause-effect/especifics/:id"
            component={CauseEffectEspecifics}
          />
          <Route exact path="/color-cycle" component={ColorCycle} />
        </Switch>
      </div>
    );
  }
}
