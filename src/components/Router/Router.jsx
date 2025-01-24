import { createBrowserRouter } from 'react-router-dom'
import Root from '../Root/Root'
import ErrorPage from '../ErrorPage/ErrorPage'
import Home from './../Home/Home';
import ReadBooks from './../ReadBooks/ReadBooks';
import BookDetails from './../BookDetails/BookDetails';

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
      },
      {
        path: '/bookDetails/:bookId',
        element: <BookDetails/>
      }
    ]
  }
])

export default router
