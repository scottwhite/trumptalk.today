import React from 'react';

export default (props)=>{
  let transtime = (11 - Number.parseInt(props.idx))/2;
  let style = {animationDelay: transtime + 's'};
  return (
    <div className="tweet" style={style}>{props.tweet.text}</div>
  )
}