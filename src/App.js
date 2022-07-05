import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Addpage from './pages/add/addpage';
import Homepage from './pages/home/homepage';
import Loginpage from './pages/login/loginpage';
import Registerpage from './pages/register/registerpage';
import Header from './components/header/header';
import ProtectedRoute from './components/protRoute/protRoute';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path={'/register'}>
            <Registerpage />
          </Route>
          <Route path={'/login'}>
            <Loginpage />
          </Route>
          <ProtectedRoute path={'/add'}>
            <Addpage />
          </ProtectedRoute>
          <ProtectedRoute exact path={'/home'}>
            <Homepage />
          </ProtectedRoute>
          <Route path={'*'}>
            <h2>Page not found.</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
