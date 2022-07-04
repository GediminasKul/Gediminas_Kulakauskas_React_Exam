import './App.css';
import { Route, Switch } from 'react-router';

import Addpage from './pages/add/addpage';
import Homepage from './pages/home/homepage';
import Loginpage from './pages/login/loginpage';
import Registerpage from './pages/register/registerpage';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={'/'}>
          <Homepage />
        </Route>
        <Route path={'/add'}>
          <Addpage />
        </Route>
        <Route path={'/login'}>
          <Loginpage />
        </Route>
        <Route path={'/register'}>
          <Registerpage />
        </Route>
        <Route path="*">
          <h2>Page Not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
