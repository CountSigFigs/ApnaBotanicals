import React from 'react';
import './App.css';
import Main from './Components/MainComponent'
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render (){
    return (
      <BrowserRouter>
        <div id="root">
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
