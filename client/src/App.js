import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import {useAuthContext} from './context/authContext'
import Profile from './components/Profile';
import UserProfile from './components/UserProfile';
import SearchPage from './components/SearchPage';
function App() {
  const context = useAuthContext();
  console.log('APP',context)
  
  return (
    <div>
      {context.user !== null &&<button onClick={context.logout}>LOGOUT</button>}
      {context.user &&<a href='/profile'><h3>Profile</h3></a>}
      {context.user === null && (<a href='/login'>LOGIN</a>)}
      <Router>
        <Switch>
        <Route exact path='/searchpage' component={SearchPage} />

          <Route exact path='/signup' component={SignupForm} />
          <Route exact path='/login' component={LoginForm}/>
          <Route exact path='/profile' 
          render={() => <Profile {...context.user} authed={true} />}/>
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
