import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "./constants"
import * as actions from "./actions"
import { notification_list } from "./services"

function* notification_listWorker(action) {
  try {
    const result = yield call(notification_list, action)
    yield put(actions.notification_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.notification_listFailed(err, action))
  }
}

function* notification_listWatcher() {
  yield takeEvery(types.NOTIFICATION_LIST, notification_listWorker)
}

export default function* rootSaga() {
  const sagas = [
    notification_listWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
