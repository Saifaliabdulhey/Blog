import './App.scss';
import { startSetPosts } from './actions/posts'
import AppRouter, { history } from './components/AppRouter';
import { Provider } from 'react-redux';
import { login, logout } from './actions/auth'
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import { root } from './index'

const store = configureStore();

const App = () => (

  <Provider store={store} >
    <AppRouter />
  </Provider>
)

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {

    root.render(<App />)
    hasRendered = true;
  }
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetPosts()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/home')
      }
    })
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
})

export default App;
