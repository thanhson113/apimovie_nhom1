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
import Profile from './pages/Profile/Profile';
import {AdminTemplate} from './templates/AdminTemplate/AdminTemplate'
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Film from './pages/Admin/Film/Film';
import User from './pages/Admin/User/User'
import ShowTime from './pages/Admin/Showtime/Showtime';
import AddFilm from './pages/Admin/Film/AddFilm/AddFilm';
import EditFilm from './pages/Admin/Film/EditFilm/EditFilm';
import AddUser from './pages/Admin/User/AddUser/AddUser';
import EditUser from './pages/Admin/User/EditUser/EditUser';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
        <Switch>
          <HomeTemplate path="/home" component={Home}/>
          <HomeTemplate path="/detail/:id" component={Detail}/>
          <HomeTemplate path="/profile" component={Profile}/>
          <UserTemplate path="/login" component={Login}/>
          <UserTemplate  path="/register" component={Register}/>
          <CheckoutTemplate path="/checkout/:id" component={Checkout}/>
          <AdminTemplate path="/admin/user/edituser/:id" component={EditUser}/>
          <AdminTemplate path="/admin/user/adduser" component={AddUser}/>
          <AdminTemplate path="/admin/user" component={User}/>
          <AdminTemplate path="/admin/film/addnew" component={AddFilm}/>
          <AdminTemplate path="/admin/film/edit/:id" component={EditFilm}/>
          <AdminTemplate path="/admin/film/showtime/:id/:tenphim" component={ShowTime}/>
          <AdminTemplate path="/admin/film" component={Film}/>
          <AdminTemplate path="/admin" component={Dashboard}/>
          <HomeTemplate path="/" component={Home}/> 
          {/* Khi đường dẫn sai thì render về component home */}
          {/* <Route  path="*" component={Home}/> */}
        </Switch>
    </Router>
  );
}

export default App;
