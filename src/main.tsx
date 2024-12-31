import { createRoot } from 'react-dom/client'
import {AppRoutes } from './app-routes'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>
)
