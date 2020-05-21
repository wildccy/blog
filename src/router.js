import dynamic from 'dva/dynamic'
import {Router, Route, Switch} from 'dva/router';

export default ({app, history}) => {

  history.listen(() => window.scrollTo(0, 0));

  const App = dynamic({app, component: () => import('./routes/App')});

  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route
            exact
            path="/"
            component={dynamic({app, component: () => import('./routes/Init')})}
          />
          <Route
            exact
            path="/hola"
            component={dynamic({app, component: () => import('./routes/Hola/index')})}
          />
          <Route
            exact
            path="/life"
            component={dynamic({app, component: () => import('./routes/Life')})}
          />
          <Route
            exact
            path="/toy"
            component={dynamic({app, component: () => import('./routes/Toy')})}
          />
          <Route
            exact
            path="/contact"
            component={dynamic({app, component: () => import('./routes/Contact')})}
          />
          <Route component={dynamic({app, component: () => import('./routes/404')})} />
        </Switch>
      </App>
    </Router>
  )
}
