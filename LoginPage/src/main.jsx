import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import PrivateRoute from './PrivateRoute.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Login/>} />,
    <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
