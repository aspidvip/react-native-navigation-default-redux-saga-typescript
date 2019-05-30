import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import ReduxSagaExposedPromise from './middlewares/ReduxSagaExposedPromise';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'Info',
  storage: AsyncStorage,
  // blacklist: ['app'],
  // whitelist: ['user', 'localSettings', 'remoteConfig', 'metrica'],
};

const sagaMiddleware = createSagaMiddleware();

const persisterReducer = persistReducer(persistConfig, rootReducer);
const middlewares = applyMiddleware(ReduxSagaExposedPromise, sagaMiddleware);

export const store = createStore(persisterReducer, composeWithDevTools(middlewares));

const sagas = [rootSaga];
sagas.forEach(sagaMiddleware.run);

export const persistor = persistStore(store);
