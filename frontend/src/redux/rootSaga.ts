/**
 * Root Saga
 */

import { fork } from 'redux-saga/effects';
import { accountSaga } from './modules/accounts';
import { authSaga } from './modules/auth';
import { categorySaga } from './modules/categories';
import { transactionSaga } from './modules/transactions';

/**
 * Root saga that forks all feature sagas
 */
export function* rootSaga() {
  yield fork(authSaga);
  yield fork(transactionSaga);
  yield fork(accountSaga);
  yield fork(categorySaga);
}

export default rootSaga;
