import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import appRouter from './App.jsx'
import Context from './context/Context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context >
      <RouterProvider router={appRouter} />
    </Context>
  </React.StrictMode>,
)
