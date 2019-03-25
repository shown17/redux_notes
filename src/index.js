import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
, document.getElementById('root'));


