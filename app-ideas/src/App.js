import { Route } from 'react-router-dom';
import Tier1 from './pages/Tier1';
import Tier2 from './pages/Tier2';
import Tier3 from './pages/Tier3';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/tier1" component={Tier1} />
      <Route exact path="/tier2" component={Tier2} />
      <Route exact path="/tier3" component={Tier3} />
    </div>
  );
}

export default App;
