import 'babel-polyfill';
import 'normalize.css';
import React from 'react'; // StrictMode、 AsyncMode
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import RootStore from './stores';
import MobxPageDemo from './views/mobx-demo';
import './styles/overwrite.less';

const rootStore = new RootStore();

console.log('react', document);
window.parent.postMessage('这是一条来自iframe传递给parent的通信', '*');

// 通信监听
window.addEventListener('message', (event) => {
  if (event.data && (event.source === window.parent)) {
    console.log(event, event.data);
  }
});

ReactDOM.render(
  <div>
    <Provider {...rootStore}>
      <MobxPageDemo />
    </Provider>
  </div>,
  document.querySelector('#app'),
);
