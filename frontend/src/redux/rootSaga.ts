/**
 * Root Saga
 */

import { fork } from 'redux-saga/effects';
import { authSaga } from './modules/auth';
import { transactionSaga } from './modules/transactions';

/**
 * Root saga that forks all feature sagas
 */
export function* rootSaga() {
  yield fork(authSaga);
  yield fork(transactionSaga);
}

export default rootSaga;
