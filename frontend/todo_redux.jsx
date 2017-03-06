 import React from 'react';
 import ReactDOM from 'react-dom';
 import {configureStore} from './store/store.js';
 import Root from './components/root';



 document.addEventListener("DOMContentLoaded", (e) => {
   const store = configureStore();
   ReactDOM.render(< Root store = {store}/>, document.getElementById('content'));
 });
