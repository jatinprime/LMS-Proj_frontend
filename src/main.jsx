import App from './App.jsx'

import './index.css'

import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import {BrowserRoutes} from 'react-router-dom'
import store from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRoutes>
        <App />
        <Toaster/>
      </BrowserRoutes>
    </Provider>
)
