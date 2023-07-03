import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider,Outlet, ScrollRestoration } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Home from './pages/Home'
import Footer from './components/Footer'
import Category from './pages/Category'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

const App =()=>{
 
  return (
    <div>
      <Navbar/>
      
      <Outlet/>
      <Footer/>
      <ScrollRestoration />
      
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element:<Home/>,
      },
      {
        path:'/category/:id',
        element:<Category/>,
      },
      {
        path: '/product/:id',
        element:<ProductPage/>,
      },
      {
        path: '/cart',
        element:<CartPage/>,
      }
     
    ]
  }
])

export default appRouter;
