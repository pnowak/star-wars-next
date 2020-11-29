import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export interface SagaStore extends Store {
  sagaTask: Task;
}

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(...[applyMiddleware(sagaMiddleware)])
  );

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(configureStore, { debug: true });
