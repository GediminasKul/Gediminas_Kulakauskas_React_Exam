import './App.css';
import { Route, Switch } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

import Addpage from './pages/add/addpage';
import Homepage from './pages/home/homepage';
import Loginpage from './pages/login/loginpage';
import Registerpage from './pages/register/registerpage';
import Header from './components/header/header';
import ProtectedRoute from './components/protRoute/protRoute';
import Notfoundpage from './pages/notfound/notfound';
import { Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Routes> */}
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
        <ProtectedRoute exact path={'/'}>
          <Homepage />
        </ProtectedRoute>
        <Route path={'*'}>
          <Notfoundpage />
        </Route>
      </Switch>
      {/* </Routes> */}
    </div>
  );
}

export default App;
