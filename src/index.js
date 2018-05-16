import React from 'react';
import ReactDOM from 'react-dom';
import '@massds/mayflower/css/index-generated.css';
import '@massds/mayflower/css/base-theme-generated.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
