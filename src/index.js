import dva from 'dva';
import './style/index.scss';
import router from './router';

const createBrowserHistory = require('history').createBrowserHistory

// 1. Initialize
const app = dva({
  history: createBrowserHistory(),
  onError(e) {
    console.log(e.message);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
