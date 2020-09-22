import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from '../reducers/posts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
