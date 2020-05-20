import React from 'react';
import './App.css';
import Main from './Components/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';

export default function Routes(){
  const store = ConfigureStore();
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div id="root">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }


