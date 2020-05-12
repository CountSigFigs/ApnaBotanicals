import React from 'react';
import './App.css';
import Main from './Components/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';

const store = ConfigureStore();

class App extends React.Component {
  render (){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="root">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
