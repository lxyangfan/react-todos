import { all, call, put, takeLatest } from 'redux-saga/effects'
import { fetchTodos } from '../api/todo'
import { FETCHED_TODOS_REQUEST, UPDATE_LATEST_ID, fetchedTodos, fetchedTodosFailed, updateLastId } from '../action/todo'

// work saga
export function* fetchAllTodosSaga() {
    try {
        const data = yield call(fetchTodos)
        const lastest = data.reduce((acc, cur) => (Number.parseInt(acc.id) > Number.parseInt(cur.id) ? acc : cur), 0)
        console.log(`fetchAllTodosSaga - lastest`)
        console.log(lastest)
        yield put(fetchedTodos(data))
        yield put(updateLastId(lastest.id))
    } catch (err) {
        yield put(fetchedTodosFailed(err))
    }
}

export function* watchFetchAllTodos() {
    yield takeLatest(FETCHED_TODOS_REQUEST, fetchAllTodosSaga)
}

export default function* rootSagas() {
    yield all([
        watchFetchAllTodos()
    ])
}
