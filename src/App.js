// import logo from './logo.svg';
import './App.css';
import './styles/tailwind.output.css';

import { Provider } from 'react-redux';
import store from './store/index';
import { Route, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Developer from './pages/Developer';
import RealEstate from './pages/RealEstate';
import Login from './pages/Login';
import Navbar from './components/navbar';
import AddDeveloper from './pages/AddDeveloper';
import EditDeveloper from './pages/EditDeveloper';
import AddRealEstate from './pages/AddRealEstate';
import EditRealEstate from './pages/EditRealEstate';
import AddComplex from './pages/AddComplex';
import EditComplex from './pages/EditComplex';
import AddAdmin from './pages/AddAdmin';
import EditAdmin from './pages/EditAdmin';
import Home from './pages/Home';
import PageNotFound from './pages/404';
const getIsLoggedIn = () => {
  const token = localStorage.getItem('access_token');
  return token ? true : false;
};

const requireLogin = (to, from, next) => {
  console.log(to.match.path, 'to router guard');
  if (to.meta.auth) {
    if (to.match.path === '/login' && getIsLoggedIn()) {
      next.redirect('/');
    } else {
      if (getIsLoggedIn()) {
        next();
      }
      next.redirect('/login');
    }
  } else {
    next();
  }
};

function App() {
  return (
    <Provider store={store}>
      <GuardProvider guards={[requireLogin]}>
        {/* {getIsLoggedIn() ? <Navbar /> : null} */}
        <Navbar />
        <Switch>
          <GuardedRoute path="/login" exact component={Login} meta={{ auth: true }} />

          <GuardedRoute path="/real-estates/:devId/add" component={AddRealEstate} meta={{ auth: true }} />
          <GuardedRoute path="/real-estates/:id/edit" component={EditRealEstate} meta={{ auth: true }} />

          <GuardedRoute path="/admin/:id/:estateId/add" component={AddAdmin} meta={{ auth: true }} />
          <GuardedRoute path="/admin/:id/:estateId/edit" component={EditAdmin} meta={{ auth: true }} />

          <GuardedRoute path="/complexes/:estateId/add" component={AddComplex} meta={{ auth: true }} />
          <GuardedRoute path="/complexes/:id/edit" component={EditComplex} meta={{ auth: true }} />

          <GuardedRoute path="/developers/add" component={AddDeveloper} meta={{ auth: true }} />
          <GuardedRoute path="/developers/:id/edit" component={EditDeveloper} meta={{ auth: true }} />
          <GuardedRoute path="/developers/:id" component={RealEstate} meta={{ auth: true }} />
          <GuardedRoute path="/developers" component={Home} meta={{ auth: true }} />
          <GuardedRoute path="/" exact component={Home} meta={{ auth: true }} />
          <GuardedRoute path="*" exact component={PageNotFound} meta={{ auth: true }} />

          {/* <Route path="/developers/add">
            <AddDeveloper />
          </Route>
          <Route path="/developers/:id/edit">
            <EditDeveloper />
          </Route>
          <Route path="/developers/:id">
            <RealEstate />
          </Route>
          <Route path="/developers">
            <Home />
          </Route>
          <Route path="/real-estates/:id/edit">
            <EditRealEstate />
          </Route>
          <Route path="/real-estates/:devId/add/">
            <AddRealEstate />
          </Route>
          <Route path="/admin/:id/:estateId/add">
            <AddAdmin />
          </Route>
          <Route path="/admin/:id/:estateId/edit">
            <EditAdmin />
          </Route>
          <Route path="/complexes/:id/edit">
            <EditComplex />
          </Route>
          <Route path="/complexes/:estateId/add">
            <AddComplex />
          </Route>
          <Route path="/login">
            <Login />
          </Route> */}
        </Switch>
      </GuardProvider>
    </Provider>
  );
}

export default App;
