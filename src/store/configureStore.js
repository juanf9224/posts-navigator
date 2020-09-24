import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import postsReducer from '../reducers/posts';
import filtersReducer from '../reducers/filters';
import editDialogReducer from '../reducers/edit-dialog';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    posts: postsReducer,
    filters: filtersReducer,
    editDialog: editDialogReducer
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware, thunk))
);

sagaMiddleware.run(sagas);

export default store;
