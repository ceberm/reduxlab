import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"
import reducers from './reducers'
import promiseMiddleware from "redux-promise";

const createStoreMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store = {createStoreMiddleware(reducers)}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
