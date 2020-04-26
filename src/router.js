import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Hola from './routes/hola';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Hola} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
