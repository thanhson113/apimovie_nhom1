import logo from './logo.svg';
import './App.css';
import {createBrowserHistory} from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import HomeMenu from './pages/Home/HomeMenu/HomeMenu';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { CheckoutTemplate } from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
        <Switch>
          <HomeTemplate path="/home" component={Home}/>
          <HomeTemplate path="/detail/:id" component={Detail}/>
          <UserTemplate path="/login" component={Login}/>
          {/* <Route exact path="/login" component={Login}/> */}
          <UserTemplate  path="/register" component={Register}/>
          <CheckoutTemplate path="/checkout/:id" component={Checkout}/>
          <HomeTemplate path="/" component={Home}/> 
          {/* Khi đường dẫn sai thì render về component home */}
          {/* <Route  path="*" component={Home}/> */}
        </Switch>
    </Router>
  );
}

export default App;
