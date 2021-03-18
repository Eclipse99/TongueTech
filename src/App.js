
import Profil from './profil.js';
import About from './about.js';
import Header from './header.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/profil" component={Profil}/>
      </Switch>
    </div>
  </Router>
);

const Home =()=>(
  <div>
    <h1>Home</h1>
  </div>
);
export default App;

