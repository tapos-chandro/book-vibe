import { createBrowserRouter } from 'react-router-dom'
import Root from '../Root/Root'
import ErrorPage from '../ErrorPage/ErrorPage'
import Home from './../Home/Home';
import ReadBooks from './../ReadBooks/ReadBooks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/books',
        element: <ReadBooks/>
      }
    ]
  }
])

export default router
