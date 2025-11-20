/**
 * Root Saga
 */

import { fork } from 'redux-saga/effects';
import { authSaga } from './modules/auth';
import { transactionSaga } from './modules/transactions';
import { accountSaga } from './modules/accounts';
import { categorySaga } from './modules/categories';

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
