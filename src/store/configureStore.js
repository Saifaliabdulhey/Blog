import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import postsReducer from '../reducers/posts';
import authReducer from '../reducers/auth';
import filterReducers from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const exportStore = () => {
const store = createStore(
    combineReducers({
      posts: postsReducer,
      filters: filterReducers,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

export default exportStore;