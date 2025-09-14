import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.js'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/:lang', element: <App /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
