import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from "./context/reducer"
import reducer, { initialState } from "./context/reducer/reducer"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);