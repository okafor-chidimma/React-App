import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.css';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));
module.hot.accept();