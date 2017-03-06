 import React from 'react';
 import ReactDOM from 'react-dom';
 import {configureStore} from './store/store.js';

 document.addEventListener("DOMContentLoaded", (e) => {
   ReactDOM.render(<h1>Todos App</h1>, document.getElementById('root'));
   configureStore();
 });
