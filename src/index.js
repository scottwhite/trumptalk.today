import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'
import rootSaga from './store/sagas'
import App from './app'

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);