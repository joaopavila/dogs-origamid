import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
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
