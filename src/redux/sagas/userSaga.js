import { call, put, takeEvery } from 'redux-saga/effects'
import { UPDATE_NAME, updateUserNameSuccess } from '../userActions';

const getUserName = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await res.json();
    return result[Math.floor(Math.random() * 11)].name;
    
}
// worker Saga: will be fired on UPDATE_NAME actions
function* fetchUser() {
  try {
    const userName = yield call(getUserName);
    yield put(updateUserNameSuccess(userName))
  } catch (e) {
    console.log(e);
  }
}

/*
  Starts fetchUser on each dispatched `UPDATE_NAME` action.
  Allows concurrent fetches of user.
*/
function* userSaga() {
  yield takeEvery(UPDATE_NAME, fetchUser) 
}

export default userSaga