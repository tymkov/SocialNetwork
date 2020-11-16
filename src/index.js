import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*
import {addMessage} from './redux/state';
import {showNewTextInInput} from './redux/state';
import {subscribe} from './redux/state';
*/
import store from './redux/reduxStore';

export let renderEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App store={store}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
};

renderEntireTree(store);

store.subscribe(renderEntireTree);