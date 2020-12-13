// import logo from './logo.svg';
import './App.css';
import './styles/tailwind.output.css';

import { Provider } from 'react-redux';
import store from './store/index';
import { Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import {
  RealEstate,
  Login,
  AddDeveloper,
  EditDeveloper,
  AddRealEstate,
  EditRealEstate,
  AddComplex,
  EditComplex,
  AddAdmin,
  EditAdmin,
  Home,
  PageNotFound,
} from './pages';
import Navbar from './components/navbar';

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
        </Switch>
      </GuardProvider>
    </Provider>
  );
}

export default App;
