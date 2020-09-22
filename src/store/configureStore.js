import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from '../reducers/posts';
import selectedPostReducer from "../reducers/selected-post";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      selectedPost: selectedPostReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
