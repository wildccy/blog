import dynamic from 'dva/dynamic'
import {Router, Route, Switch} from 'dva/router';

export default ({app, history}) => {

  history.listen(() => window.scrollTo(0, 0));

  const App = dynamic({app, component: () => import('./routes/App')});
  const Init = dynamic({app, component: () => import('./routes/Init')});


  const Hola = dynamic({app, component: () => import('./routes/Hola/index')});
  const Blog = dynamic({app, component: () => import('./routes/Blog')});
  const Life = dynamic({app, component: () => import('./routes/Life')});
  const Projects = dynamic({app, component: () => import('./routes/Projects')});
  const Contact = dynamic({app, component: () => import('./routes/Contact')});


  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Init}/>
          <Route exact path="/hola" component={Hola}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/life" component={Life}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </App>
    </Router>
  )
}
