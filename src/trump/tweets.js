import React from 'react';
import Tweet from './tweet';

export default (props)=>{
  function processTweets(){
    if(props.data && props.data.length >0){
      let ts = [];
      let max = (10 < props.data.length ? 10 : props.data.length);
      for(let i = 0; i< max; i++){
        let tweet = props.data[i];
        ts.push((<Tweet idx={i} key={tweet.id} tweet={tweet} />));
      }
      return ts.reverse();
    }
  }
  let tweetlist = processTweets();
  return (
    <div className="tweets moving">{tweetlist}</div>
  )
}