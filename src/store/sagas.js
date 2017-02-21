import { takeEvery } from 'redux-saga'
import { fork } from 'redux-saga/effects'

import {fetchTweets} from '../trump/sagas'

function* sagas() {
  yield fork(takeEvery, 'TWEETS_GET_REQUESTED', fetchTweets)
}

export default sagas
