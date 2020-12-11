// import logo from './logo.svg';
import './App.css';
import './styles/tailwind.output.css';

import { Provider } from 'react-redux';
import store from './store/index';
import { Route, Switch } from 'react-router-dom';
import Developer from './pages/Developer';
import RealEstate from './pages/RealEstate';
import Login from './pages/Login';
import Navbar from './components/navbar';
import Complex from './pages/Complex';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Developer />
        </Route>
        <Route exact path="/developers">
          <Developer />
        </Route>
        <Route exact path="/developers/:id">
          <RealEstate />
        </Route>
        <Route exact path="/developers/:id/:realEstedId">
          <Complex />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
