import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import './assets/css/antd.css'
// import { RootApp } from './containers';
import UserContextStore from './store/userContext';
import recommendStore from './store/recommend';
import songSheet from './store/songSheet';
import music from './store/music';
import play from './store/play';
import mv from './store/mv';
import video from "video.js"
console.log(video);
import Routers from "./routers";
import "./style.css";
render(
  <Provider 
  UserContextStore={UserContextStore} //用户
  recommendStore={recommendStore}     //推荐列表
  songSheetStore={songSheet}          //歌单列表
  musictStore={music}                 //音乐列表
  playStore={play}                    //音频播放器
  mvStore={mv}                        //mv
  
  >
    <Routers />
  </Provider>,
  document.getElementById('root')
);
