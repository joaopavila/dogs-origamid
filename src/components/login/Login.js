import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);
  const history = useHistory();

  if (login) history.push('/conta');
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route path="/login/criar" component={LoginCreate} />
        <Route path="/login/perdeu" component={LoginPasswordLost} />
        <Route path="/login/resetar" component={LoginPasswordReset} />
      </Switch>
    </div>
  );
};

export default Login;
