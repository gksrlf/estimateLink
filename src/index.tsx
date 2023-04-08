import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@style/reset.css'
import App from './main'
import Login from './login'
import Write from './write'
import Join from './join'
import Ticket from './ticket'
import Mypage from '@/mypage'

const container = document.getElementById('root')
const root = createRoot(container as Element)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/write',
    element: <Write />,
  },
  {
    path: '/join',
    element: <Join />,
  },
  {
    path: '/ticket',
    element: <Ticket />,
  },
  {
    path: '/mypage',
    element: <Mypage />,
  },
])

root.render(<RouterProvider router={router} />)
