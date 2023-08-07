import React from 'react'
import ReactDOM from 'react-dom/client'
import firebaseConfig from './firebaseConfig.jsx'
import store from './store.jsx'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

      <Provider store={store}>
      <App />
      </Provider>

)
