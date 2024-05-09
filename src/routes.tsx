import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { ErrorPage } from './pages/error'
import { AppLayout } from './pages/layouts/app'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
