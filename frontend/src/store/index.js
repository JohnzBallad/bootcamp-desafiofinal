import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import reducers from './ducks';
import sagas from './sagas';

/**
 *  Middlewares
 */

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const tronMiddleware = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};

/**
 * Store
 */

export const history = createBrowserHistory();

const store = createStore(
  reducers(history),
  compose(
    applyMiddleware(...middlewares, routerMiddleware(history)),
    tronMiddleware(),
  ),
);

sagaMiddleware.run(sagas);

export default store;
