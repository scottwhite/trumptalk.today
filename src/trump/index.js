import React, { Component } from 'react';
import './tweets.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './actions';
import Tweets from './tweets';

function TrumpHead(props){
  function moveMouth(){
    let m = document.getElementById('trump-mouth');
    m.classList.remove('move-mouth');
    void m.offsetWidth;
    m.classList.add('move-mouth');
    if(props.onClick){
      props.onClick();
    }
  }
  return (
    <div id="trump" onClick={moveMouth}>
      <img id="trump-head" src="images/trump-head-moving.png" alt="trump head"/>
      <img id="trump-mouth" src="images/trump-mouth.png" alt="trump mouth"/>
    </div>
  )
}

class Main extends Component {
  loadTweets(){
    this.props.fetchTweets();
  }
  render() {
    let {error, tweets} = this.props;
    return (
      <div className="app">
        <div className="top-part">
        <svg className="usa-ussr-flag" x="0" y="0" width="1235" height="650" viewBox="0, 0, 1235, 650">
          <g id="Layer_1">
            <path d="M0,0 L1235,0 L1235,650 L0,650 z" fill="#B22234"/>
            <g>
              <path d="M0.5,75.5 L1235.5,75.5 M1235.5,175.5 L0.5,175.5 M0.5,275.5 L1235.5,275.5 M1235.5,375.5 L0.5,375.5 M0.5,475.5 L1235.5,475.5 M1235.5,575.5 L0.5,575.5" fill="#000000"/>
              <path d="M0.5,75.5 L1235.5,75.5 M1235.5,175.5 L0.5,175.5 M0.5,275.5 L1235.5,275.5 M1235.5,375.5 L0.5,375.5 M0.5,475.5 L1235.5,475.5 M1235.5,575.5 L0.5,575.5" fillOpacity="0" stroke="#FFFFFF" strokeWidth="50"/>
            </g>
            <path d="M-0,0 L494,0 L494,350 L-0,350 z" fill="#3C3B6E"/>
            <path d="M244.582,50.8 L217.582,50.8 L239.382,66.8 L231.182,92.4 L252.982,76.6 L274.782,92.4 L266.582,66.8 L288.382,50.8 L261.382,50.8 L252.982,25 L244.582,50.8 z M252.982,41 L257.782,55.8 L273.182,55.8 L260.782,64.8 L265.502,79.5 L252.982,70.4 L240.462,79.5 L245.182,64.8 L232.782,55.8 L248.182,55.8 L252.982,41 z" fill="#FFFFFF"/>
            <path d="M219.559,128.045 L185.573,160.415 L203.699,178.541 L219.35,162.785 C249.872,193.765 273.596,217.851 303.07,247.763 C311.229,256.223 325.438,244.719 316.338,234.951 C285.198,204.604 263.616,182.701 231.173,150.884 L250.408,131.536 z" fill="#FFFFFF"/>
            <path d="M218.412,218.854 C279.215,275.26 377.745,173.55 251.825,99.841 C345.532,203.951 255.57,235.867 222.996,203.75 L221.356,202.395 C220.026,203.888 218.693,205.379 217.365,206.873 C214.841,204.491 210.921,203.791 209.715,207.864 C204.755,207.521 201.845,210.269 200.548,215.417 C191.324,221.527 181.338,226.889 175.599,236.485 C172.319,246.635 178.807,251.049 186.146,250.209 C198.177,245.211 201.896,234.408 208.334,225.495 C212.886,224.046 216.741,222.098 217.448,217.955" fill="#FFFFFF"/>
          </g>
        </svg>
        <TrumpHead onClick={this.loadTweets.bind(this)}/>
        </div>

          <svg className="soviet-stars-flag" x="0" y="0" width="1235" height="650" viewBox="0, 0, 1235, 650">
            <g id="Background">
              <rect x="0" y="0" width="1235" height="650" fill="#FFFFFF"/>
              <g strokeWidth="1px">
                <line x1="12" y1="0" x2="12" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="24" y1="0" x2="24" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="36" y1="0" x2="36" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="48" y1="0" x2="48" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="60" y1="0" x2="60" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="72" y1="0" x2="72" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="84" y1="0" x2="84" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="96" y1="0" x2="96" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="108" y1="0" x2="108" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="120" y1="0" x2="120" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="132" y1="0" x2="132" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="144" y1="0" x2="144" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="156" y1="0" x2="156" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="168" y1="0" x2="168" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="180" y1="0" x2="180" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="192" y1="0" x2="192" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="204" y1="0" x2="204" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="216" y1="0" x2="216" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="228" y1="0" x2="228" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="240" y1="0" x2="240" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="252" y1="0" x2="252" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="264" y1="0" x2="264" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="276" y1="0" x2="276" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="288" y1="0" x2="288" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="300" y1="0" x2="300" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="312" y1="0" x2="312" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="324" y1="0" x2="324" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="336" y1="0" x2="336" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="348" y1="0" x2="348" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="360" y1="0" x2="360" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="372" y1="0" x2="372" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="384" y1="0" x2="384" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="396" y1="0" x2="396" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="408" y1="0" x2="408" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="420" y1="0" x2="420" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="432" y1="0" x2="432" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="444" y1="0" x2="444" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="456" y1="0" x2="456" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="468" y1="0" x2="468" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="480" y1="0" x2="480" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="492" y1="0" x2="492" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="504" y1="0" x2="504" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="516" y1="0" x2="516" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="528" y1="0" x2="528" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="540" y1="0" x2="540" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="552" y1="0" x2="552" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="564" y1="0" x2="564" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="576" y1="0" x2="576" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="588" y1="0" x2="588" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="600" y1="0" x2="600" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="612" y1="0" x2="612" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="624" y1="0" x2="624" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="636" y1="0" x2="636" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="648" y1="0" x2="648" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="660" y1="0" x2="660" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="672" y1="0" x2="672" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="684" y1="0" x2="684" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="696" y1="0" x2="696" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="708" y1="0" x2="708" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="720" y1="0" x2="720" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="732" y1="0" x2="732" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="744" y1="0" x2="744" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="756" y1="0" x2="756" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="768" y1="0" x2="768" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="780" y1="0" x2="780" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="792" y1="0" x2="792" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="804" y1="0" x2="804" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="816" y1="0" x2="816" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="828" y1="0" x2="828" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="840" y1="0" x2="840" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="852" y1="0" x2="852" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="864" y1="0" x2="864" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="876" y1="0" x2="876" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="888" y1="0" x2="888" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="900" y1="0" x2="900" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="912" y1="0" x2="912" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="924" y1="0" x2="924" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="936" y1="0" x2="936" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="948" y1="0" x2="948" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="960" y1="0" x2="960" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="972" y1="0" x2="972" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="984" y1="0" x2="984" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="996" y1="0" x2="996" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1008" y1="0" x2="1008" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="1020" y1="0" x2="1020" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1032" y1="0" x2="1032" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1044" y1="0" x2="1044" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1056" y1="0" x2="1056" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1068" y1="0" x2="1068" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1080" y1="0" x2="1080" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="1092" y1="0" x2="1092" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1104" y1="0" x2="1104" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1116" y1="0" x2="1116" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1128" y1="0" x2="1128" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1140" y1="0" x2="1140" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1152" y1="0" x2="1152" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="1164" y1="0" x2="1164" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1176" y1="0" x2="1176" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1188" y1="0" x2="1188" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1200" y1="0" x2="1200" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1212" y1="0" x2="1212" y2="650" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="1224" y1="0" x2="1224" y2="650" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="0" y1="12" x2="1235" y2="12" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="24" x2="1235" y2="24" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="36" x2="1235" y2="36" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="48" x2="1235" y2="48" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="60" x2="1235" y2="60" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="72" x2="1235" y2="72" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="0" y1="84" x2="1235" y2="84" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="96" x2="1235" y2="96" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="108" x2="1235" y2="108" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="120" x2="1235" y2="120" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="132" x2="1235" y2="132" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="144" x2="1235" y2="144" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="0" y1="156" x2="1235" y2="156" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="168" x2="1235" y2="168" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="180" x2="1235" y2="180" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="192" x2="1235" y2="192" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="204" x2="1235" y2="204" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="216" x2="1235" y2="216" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="0" y1="228" x2="1235" y2="228" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="240" x2="1235" y2="240" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="252" x2="1235" y2="252" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="264" x2="1235" y2="264" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="276" x2="1235" y2="276" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="288" x2="1235" y2="288" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="0" y1="300" x2="1235" y2="300" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="312" x2="1235" y2="312" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="324" x2="1235" y2="324" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="336" x2="1235" y2="336" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="348" x2="1235" y2="348" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="360" x2="1235" y2="360" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="0" y1="372" x2="1235" y2="372" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="384" x2="1235" y2="384" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="396" x2="1235" y2="396" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="408" x2="1235" y2="408" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="420" x2="1235" y2="420" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="432" x2="1235" y2="432" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="0" y1="444" x2="1235" y2="444" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="456" x2="1235" y2="456" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="468" x2="1235" y2="468" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="480" x2="1235" y2="480" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="492" x2="1235" y2="492" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="504" x2="1235" y2="504" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="0" y1="516" x2="1235" y2="516" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="528" x2="1235" y2="528" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="540" x2="1235" y2="540" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="552" x2="1235" y2="552" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="564" x2="1235" y2="564" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="576" x2="1235" y2="576" stroke="#AAAAAA" strokeOpacity="0.5"/>
                <line x1="0" y1="588" x2="1235" y2="588" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="600" x2="1235" y2="600" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="612" x2="1235" y2="612" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="624" x2="1235" y2="624" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="636" x2="1235" y2="636" stroke="#AAAAAA" strokeOpacity="0.25"/>
                <line x1="0" y1="648" x2="1235" y2="648" stroke="#AAAAAA" strokeOpacity="0.5"/>
              </g>
            </g>
            <g id="Layer_1">
              <path d="M0,0 L1235,0 L1235,650 L0,650 z" fill="#CC0000"/>
              <g>
                <g id="s18">
                  <g id="s9">
                    <g id="s5">
                      <g id="s4">
                        <path d="M31.312,15.82 L43.068,52 L12.291,29.639 L50.333,29.639 L19.556,52 z" fill="#FFD700" id="s"/>
                        <path d="M31.312,85.82 L43.068,122 L12.291,99.639 L50.333,99.639 L19.556,122 z" fill="#FFD700" id="s"/>
                        <path d="M31.312,155.82 L43.068,192 L12.291,169.639 L50.333,169.639 L19.556,192 z" fill="#FFD700" id="s"/>
                        <path d="M31.312,225.82 L43.068,262 L12.291,239.639 L50.333,239.639 L19.556,262 z" fill="#FFD700" id="s"/>
                      </g>
                      <path d="M31.312,295.82 L43.068,332 L12.291,309.639 L50.333,309.639 L19.556,332 z" fill="#FFD700" id="s"/>
                    </g>
                    <g id="s4">
                      <path d="M72.479,50.82 L84.235,87 L53.458,64.639 L91.5,64.639 L60.723,87 z" fill="#FFD700" id="s"/>
                      <path d="M72.479,120.82 L84.235,157 L53.458,134.639 L91.5,134.639 L60.723,157 z" fill="#FFD700" id="s"/>
                      <path d="M72.479,190.82 L84.235,227 L53.458,204.639 L91.5,204.639 L60.723,227 z" fill="#FFD700" id="s"/>
                      <path d="M72.479,260.82 L84.235,297 L53.458,274.639 L91.5,274.639 L60.723,297 z" fill="#FFD700" id="s"/>
                    </g>
                  </g>
                  <g id="s9">
                    <g id="s5">
                      <g id="s4">
                        <path d="M113.646,15.82 L125.401,52 L94.624,29.639 L132.667,29.639 L101.89,52 z" fill="#FFD700" id="s"/>
                        <path d="M113.646,85.82 L125.401,122 L94.624,99.639 L132.667,99.639 L101.89,122 z" fill="#FFD700" id="s"/>
                        <path d="M113.646,155.82 L125.401,192 L94.624,169.639 L132.667,169.639 L101.89,192 z" fill="#FFD700" id="s"/>
                        <path d="M113.646,225.82 L125.401,262 L94.624,239.639 L132.667,239.639 L101.89,262 z" fill="#FFD700" id="s"/>
                      </g>
                      <path d="M113.646,295.82 L125.401,332 L94.624,309.639 L132.667,309.639 L101.89,332 z" fill="#FFD700" id="s"/>
                    </g>
                    <g id="s4">
                      <path d="M154.812,50.82 L166.568,87 L135.791,64.639 L173.833,64.639 L143.056,87 z" fill="#FFD700" id="s"/>
                      <path d="M154.812,120.82 L166.568,157 L135.791,134.639 L173.833,134.639 L143.056,157 z" fill="#FFD700" id="s"/>
                      <path d="M154.812,190.82 L166.568,227 L135.791,204.639 L173.833,204.639 L143.056,227 z" fill="#FFD700" id="s"/>
                      <path d="M154.812,260.82 L166.568,297 L135.791,274.639 L173.833,274.639 L143.056,297 z" fill="#FFD700" id="s"/>
                    </g>
                  </g>
                </g>
                <g id="s18">
                  <g id="s9">
                    <g id="s5">
                      <g id="s4">
                        <path d="M195.979,15.82 L207.735,52 L176.958,29.639 L215,29.639 L184.223,52 z" fill="#FFD700" id="s"/>
                        <path d="M195.979,85.82 L207.735,122 L176.958,99.639 L215,99.639 L184.223,122 z" fill="#FFD700" id="s"/>
                        <path d="M195.979,155.82 L207.735,192 L176.958,169.639 L215,169.639 L184.223,192 z" fill="#FFD700" id="s"/>
                        <path d="M195.979,225.82 L207.735,262 L176.958,239.639 L215,239.639 L184.223,262 z" fill="#FFD700" id="s"/>
                      </g>
                      <path d="M195.979,295.82 L207.735,332 L176.958,309.639 L215,309.639 L184.223,332 z" fill="#FFD700" id="s"/>
                    </g>
                    <g id="s4">
                      <path d="M237.145,50.82 L248.901,87 L218.124,64.639 L256.167,64.639 L225.39,87 z" fill="#FFD700" id="s"/>
                      <path d="M237.145,120.82 L248.901,157 L218.124,134.639 L256.167,134.639 L225.39,157 z" fill="#FFD700" id="s"/>
                      <path d="M237.145,190.82 L248.901,227 L218.124,204.639 L256.167,204.639 L225.39,227 z" fill="#FFD700" id="s"/>
                      <path d="M237.145,260.82 L248.901,297 L218.124,274.639 L256.167,274.639 L225.39,297 z" fill="#FFD700" id="s"/>
                    </g>
                  </g>
                  <g id="s9">
                    <g id="s5">
                      <g id="s4">
                        <path d="M278.312,15.82 L290.068,52 L259.291,29.639 L297.333,29.639 L266.556,52 z" fill="#FFD700" id="s"/>
                        <path d="M278.312,85.82 L290.068,122 L259.291,99.639 L297.333,99.639 L266.556,122 z" fill="#FFD700" id="s"/>
                        <path d="M278.312,155.82 L290.068,192 L259.291,169.639 L297.333,169.639 L266.556,192 z" fill="#FFD700" id="s"/>
                        <path d="M278.312,225.82 L290.068,262 L259.291,239.639 L297.333,239.639 L266.556,262 z" fill="#FFD700" id="s"/>
                      </g>
                      <path d="M278.312,295.82 L290.068,332 L259.291,309.639 L297.333,309.639 L266.556,332 z" fill="#FFD700" id="s"/>
                    </g>
                    <g id="s4">
                      <path d="M319.479,50.82 L331.235,87 L300.458,64.639 L338.5,64.639 L307.723,87 z" fill="#FFD700" id="s"/>
                      <path d="M319.479,120.82 L331.235,157 L300.458,134.639 L338.5,134.639 L307.723,157 z" fill="#FFD700" id="s"/>
                      <path d="M319.479,190.82 L331.235,227 L300.458,204.639 L338.5,204.639 L307.723,227 z" fill="#FFD700" id="s"/>
                      <path d="M319.479,260.82 L331.235,297 L300.458,274.639 L338.5,274.639 L307.723,297 z" fill="#FFD700" id="s"/>
                    </g>
                  </g>
                </g>
                <g id="s9">
                  <g id="s5">
                    <g id="s4">
                      <path d="M360.646,15.82 L372.401,52 L341.624,29.639 L379.667,29.639 L348.89,52 z" fill="#FFD700" id="s"/>
                      <path d="M360.646,85.82 L372.401,122 L341.624,99.639 L379.667,99.639 L348.89,122 z" fill="#FFD700" id="s"/>
                      <path d="M360.646,155.82 L372.401,192 L341.624,169.639 L379.667,169.639 L348.89,192 z" fill="#FFD700" id="s"/>
                      <path d="M360.646,225.82 L372.401,262 L341.624,239.639 L379.667,239.639 L348.89,262 z" fill="#FFD700" id="s"/>
                    </g>
                    <path d="M360.646,295.82 L372.401,332 L341.624,309.639 L379.667,309.639 L348.89,332 z" fill="#FFD700" id="s"/>
                  </g>
                  <g id="s4">
                    <path d="M401.812,50.82 L413.568,87 L382.791,64.639 L420.833,64.639 L390.057,87 z" fill="#FFD700" id="s"/>
                    <path d="M401.812,120.82 L413.568,157 L382.791,134.639 L420.833,134.639 L390.057,157 z" fill="#FFD700" id="s"/>
                    <path d="M401.812,190.82 L413.568,227 L382.791,204.639 L420.833,204.639 L390.057,227 z" fill="#FFD700" id="s"/>
                    <path d="M401.812,260.82 L413.568,297 L382.791,274.639 L420.833,274.639 L390.057,297 z" fill="#FFD700" id="s"/>
                  </g>
                </g>
                <g id="s5">
                  <g id="s4">
                    <path d="M442.979,15.82 L454.735,52 L423.958,29.639 L462,29.639 L431.223,52 z" fill="#FFD700" id="s"/>
                    <path d="M442.979,85.82 L454.735,122 L423.958,99.639 L462,99.639 L431.223,122 z" fill="#FFD700" id="s"/>
                    <path d="M442.979,155.82 L454.735,192 L423.958,169.639 L462,169.639 L431.223,192 z" fill="#FFD700" id="s"/>
                    <path d="M442.979,225.82 L454.735,262 L423.958,239.639 L462,239.639 L431.223,262 z" fill="#FFD700" id="s"/>
                  </g>
                  <path d="M442.979,295.82 L454.735,332 L423.958,309.639 L462,309.639 L431.223,332 z" fill="#FFD700" id="s"/>
                </g>
              </g>
            </g>
          </svg>
          <Tweets data={this.props.tweets}/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { tweets, error } = state.tweets;
  return {
    tweets,
    error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
