import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase';
import {BrowserRouter} from 'react-router-dom';

firebase.initializeApp({
	apiKey: "AIzaSyBwDymLTmvKymaf-gqYRuSN_x6YUw-ToGQ",
    authDomain: "bookchange-8a945.firebaseapp.com",
    databaseURL: "https://bookchange-8a945.firebaseio.com",
    projectId: "bookchange-8a945",
    storageBucket: "bookchange-8a945.appspot.com",
    messagingSenderId: "272116534234"
});
//firebase.initializeApp(config);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
