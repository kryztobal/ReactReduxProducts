import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import { loadProducts } from './actionsCreator';

store.dispatch(loadProducts()).then(() => {
  console.log('Done!')
});


ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);
