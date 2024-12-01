import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from './store/Store'
import './index.css'

let root = ReactDOM.createRoot(document.getElementById('root'));

function UpdateState(store) {
  root.render(
    <React.StrictMode>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }} >
        <App store={store} />
      </BrowserRouter>
    </React.StrictMode>,
  )
}

store.subscribe(UpdateState);
UpdateState(store);