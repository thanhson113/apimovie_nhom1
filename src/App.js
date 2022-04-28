import logo from './logo.svg';
import './App.css';
import {createBrowserHistory} from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Film from './pages/Admin/Film/Film';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import 'antd/dist/antd.css';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
        <Switch>
          {/* <HomeTemplate path="/" component={Home}/> */}
          <AdminTemplate path="/" component ={Film}/>
        </Switch>
    </Router>
  );
}

export default App;
