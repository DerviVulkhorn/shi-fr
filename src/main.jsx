import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from '../components/pages/main/MainPage'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </React.StrictMode>,
)
