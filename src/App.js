import React from 'react';
import './App.css';
import Main from './Components/MainComponent'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';

export default function Routes(){
  const store = ConfigureStore();
    return (
      <Provider store={store}>
        <HashRouter basename='/'>
          <div id="root">
            <Main />
          </div>
        </HashRouter>
      </Provider>
    )
  }


