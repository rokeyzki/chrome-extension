import 'babel-polyfill';
import 'normalize.css';
import React from 'react'; // StrictMode、 AsyncMode
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import RootStore from './stores';
import MobxPageDemo from './views/mobx-demo';
import './styles/overwrite.less';

const rootStore = new RootStore();

ReactDOM.render(
  <div>
    <Provider {...rootStore}>
      <MobxPageDemo />
    </Provider>
  </div>,
  document.querySelector('#app'),
);
