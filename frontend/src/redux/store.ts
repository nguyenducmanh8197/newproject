/**
 * Redux Store Configuration
 */

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { authReducer } from './modules/auth';
import { transactionReducer } from './modules/transactions';
import rootSaga from './rootSaga';

// Saga middleware
const sagaMiddleware = createSagaMiddleware();

/**
 * Configure Redux store
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['@@INIT'],
        ignoredPaths: [],
      },
    }).concat(sagaMiddleware),
  devTools: import.meta.env.DEV,
});

// Run root saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
