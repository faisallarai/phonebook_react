import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const contacts = [
    {
        id: 1,
        name: "Issaka Faisal",
        number: "0244000000"
    },
    {
        id: 2,
        name: "Issaka Aziz",
        number: "0244000001"
    },
    {
        id: 3,
        name: "Unaissa Faisal",
        number: "0244000002"
    },
    {
        id: 4,
        name: "Ahmed Faisal",
        number: "0244000003"
    }
]

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
