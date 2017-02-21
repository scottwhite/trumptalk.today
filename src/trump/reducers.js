const defaultState = {
  tweets: [],
  error: null
}

export default function tweets(state = defaultState, action) {
  switch(action.type) {
    case 'TWEETS_GET_SUCCEEDED':
      return {...state, tweets: action.tweets.statuses}
    case 'WEATHER_GET_FAILED':
      console.error(action.message)
      return {...state, error: action.message}
    default:
      return defaultState;
  }
}
