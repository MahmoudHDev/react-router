import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<  BrowserRouter> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);


// BrowserRouter    => Most common used Router
// MemoryRouter     => Rendering the URL in the memory of the PC.
// StaticRouter     => alson known as Server router, tspecify a single URL using the "location" attribute 
// NativeRouter     => use it when you using ReactNative