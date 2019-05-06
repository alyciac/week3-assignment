import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import airBnbs from './_data/airbnbs.json';

// let indexedAirBnbs = {};
// airBnbs.forEach( (airBnb, index) => {
//     indexedAirBnbs[index] = airBnb
// });


ReactDOM.render(<App airBnbs={airBnbs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
