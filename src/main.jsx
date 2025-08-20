import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(

  <React.StrictMode>
    <Provider store={store}>
       <BrowserRouter>
          <App />     
       </BrowserRouter>  
    </Provider>
  </React.StrictMode>

  ,
)

