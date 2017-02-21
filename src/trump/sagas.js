import { call, put } from 'redux-saga/effects'
import Api from '../api'

export function* fetchTweets(action) {
  try {
    const data = yield call(Api.tweets, action.lastid)
    yield put({type: 'TWEETS_GET_SUCCEEDED', tweets: data})
  } catch (e) {
    yield put({type: 'TWEETS_GET_FAILED', message: e.message})
  }
}
