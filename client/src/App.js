import './App.css';
import NavBar from './Components/Navbar';
import { Route, Switch } from 'react-router';
import { Container } from 'semantic-ui-react'
import Home from './pages/Home';
import ComponentExample from './Components/ComponentExample';
import NoMatch from './Components/NoMatch'
import Login from './pages/Login';
import Register from './pages/Register';
import FetchUser from './Components/FetchUser';
import ProtectedRoute from './Components/ProtectedRoute';
import Users from './pages/Users';

function App() {
  return (
    <>
      <FetchUser>
      <NavBar />
        <Container>
          <Switch>
            <ProtectedRoute exact path='/' component={Home}/>    
            <ProtectedRoute exact path='/users' component={Users}/>
            <Route exact path='/components' component={ComponentExample}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route component={NoMatch}/>
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
