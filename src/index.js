import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; 
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import giveMeStore from "./store";
const store = 
ReactDOM.render(

      <Provider store={giveMeStore()}>
  <HashRouter>
    <App />
  </HashRouter>
   </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();