import { combineReducers } from 'redux';
import tweets from '../trump/reducers';
// import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  tweets
})

export default rootReducer
