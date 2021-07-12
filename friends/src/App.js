import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const logout = () => {
    localStorage.removeItem('token');
    console.log('Logged out');
  }
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friendsList">Friends List</Link>
          </li>
          <li>
            <Link onClick={logout} >Logout</Link>
          </li>
        </ul>

      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute  exact path="/friendsList" component={FriendsList} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
