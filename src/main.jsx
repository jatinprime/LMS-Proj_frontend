import App from './App.jsx'

import './index.css'

import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import {BrowserRoutes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRoutes>
      <App />
      <Toaster/>
    </BrowserRoutes>
)
