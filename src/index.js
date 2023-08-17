import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from 'redux';

const personReducer = (state={}, {type, payload}) => {
  if(type == 'UPDATE_PERSON'){
    return {name: payload};
  }
  return state;
};
const techReducer = (state={}, {type, payload}) => {
  if(type == 'UPDATE_TECH'){
    return {name: payload};
  }
  return state;
};

// const reducers = 
const store = createStore({personReducer, techReducer});
store.dispatch({type: 'UPDATE_PERSON', payload: 'React Redux'});
store.dispatch({type: 'UPDATE_TECH', payload: 'Redux'});
console.log(store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
