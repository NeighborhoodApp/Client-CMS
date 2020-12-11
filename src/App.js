// import logo from './logo.svg';
import './App.css';
import './styles/tailwind.output.css';

import { Provider } from 'react-redux';
import store from './store/index';
import { Route, Router, Switch } from 'react-router-dom';
import Developer from './pages/Developer';
import RealEstate from './pages/RealEstate';
import Login from './pages/Login';
import Navbar from './components/navbar';
import Complex from './pages/Complex';
import AddDeveloper from './pages/AddDeveloper';
import EditDeveloper from './pages/EditDeveloper';
import AddRealEstate from './pages/AddRealEstate';
import EditRealEstate from './pages/EditRealEstate';
import AddComplex from './pages/AddComplex';
import EditComplex from './pages/EditComplex';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Member from './pages/Member';
import AddAdmin from './pages/AddAdmin';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Developer} />
        <Route path="/developers/:id/edit">
          <EditDeveloper />
        </Route>
        <Route path="/developers/:id/addrealestate">
          <AddRealEstate />
        </Route>
        <Route path="/developers/:id/editrealestate">
          <EditRealEstate />
        </Route>
        <Route path="/developers/:id/:realEstedId/add">
          <AddComplex />
        </Route>
        <Route path="/developers/:id/:realEstedId/edit">
          <EditComplex />
        </Route>
        <Route path="/developers/:id/:realEstedId/members">
          <Member />
        </Route>
        <Route path="/developers/:id/:realEstedId/addadmin">
          <AddAdmin />
        </Route>
        <Route path="/developers/:id/:realEstedId">
          <Complex />
        </Route>
        <Route path="/developers/add">
          <AddDeveloper />
        </Route>
        <Route path="/developers/:id">
          <RealEstate />
        </Route>
        <Route path="/developers">
          <Developer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;