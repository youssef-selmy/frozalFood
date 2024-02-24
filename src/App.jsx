import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import OurBrand from './pages/OurBrand'
import OurStore from './pages/OurStore'
import Blogs from './pages/Blogs'
import ContactUs from './pages/ContactUs'
import Root from './pages/Root'
import Panel from './pages/Panel'
import Login from './pages/Login'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'brand', element: <OurBrand /> },
      { path: 'store', element: <OurStore /> },
      { path: 'blogs', element: <Blogs /> },
      { path: 'contact-us', element: <ContactUs /> },
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/panel', element: <Panel /> }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
