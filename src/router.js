import dynamic from 'dva/dynamic'
import {Router, Route, Switch} from 'dva/router';

export default ({app, history}) => {

  history.listen(() => window.scrollTo(0, 0));

  const App = dynamic({app, component: () => import('./routes/App')}),
    Init = dynamic({app, component: () => import('./routes/Init')}),
    Hola = dynamic({app, component: () => import('./routes/Hola/index')}),
    Life = dynamic({app, component: () => import('./routes/Life')}),
    Toy = dynamic({app, component: () => import('./routes/Toy')}),
    Contact = dynamic({app, component: () => import('./routes/Contact')}),
    Error = dynamic({app, component: () => import('./routes/404')});

  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Init}/>
          <Route exact path="/hola" component={Hola}/>
          <Route exact path="/life" component={Life}/>
          <Route exact path="/toy" component={Toy}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={Error}/>
        </Switch>
      </App>
    </Router>
  )
}
