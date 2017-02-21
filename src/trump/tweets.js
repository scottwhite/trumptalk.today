import React from 'react';
import Tweet from './tweet';

export default (props)=>{
  function processTweets(){
    if(props.data){
      let ts =  props.data.map((tweet) =>{
        return (<Tweet key={tweet.id} tweet={tweet} />)
      })
      return ts.reverse();
    }
  }
  let tweetlist = processTweets();
  return (
  <div className="tweets">{tweetlist}</div>
  )
}