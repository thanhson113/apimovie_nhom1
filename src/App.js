import logo from './logo.svg';
import './App.css';
import {createBrowserHistory} from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
        <Switch>
          <HomeTemplate path="/" component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
