import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import sw from './serviceWorker';

import { Provider } from './context/context';

import App from './App';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, document.getElementById('root')
);

sw();