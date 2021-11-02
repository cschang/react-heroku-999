import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/'
import SigninPage from './pages/signin';

function App() {
  return (
    <div>
      <a id="init" href="/" style={{ display: "none" }}>
        111
      </a>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
