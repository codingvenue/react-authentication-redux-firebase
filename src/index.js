import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { authInfoSuccess } from './ducks/auth.duck';
import firebase from './firebase-config';
import './index.css';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

const store = configureStore({}, firebase);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch(authInfoSuccess(user));
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
