import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)


return (
  <Router>
      <div>
        <Navigation loggedIn={loggedIn} />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={() => <SignUpPage setLoggedIn={setLoggedIn}/>} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} /> 
      </div>
    </Router>

)

};
 
export default App;