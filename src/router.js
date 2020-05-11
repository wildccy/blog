import dynamic from 'dva/dynamic'
import {Router, Route, Switch} from 'dva/router';

export default ({app, history}) => {

  history.listen(() => window.scrollTo(0, 0));

  const App = dynamic({app, component: () => import('./routes/App')});
  const Hola = dynamic({app, component: () => import('./routes/Hola')});


  const Home = dynamic({app, component: () => import('./routes/Home/index')});
  const Blog = dynamic({app, component: () => import('./routes/Blog')});
  const Life = dynamic({app, component: () => import('./routes/Life')});
  const Projects = dynamic({app, component: () => import('./routes/Projects')});
  const Contact = dynamic({app, component: () => import('./routes/Contact')});


  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Hola}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/life" component={Life}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </App>
    </Router>
  )
}
