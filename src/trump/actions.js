const actions = {
  fetchTweets(lastid){
    return {
      type: 'TWEETS_GET_REQUESTED',
      lastid
    }
  }
}


export default actions