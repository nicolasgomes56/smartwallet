import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { Home } from './pages/app/dashboard'
import { Transactions } from './pages/app/transactions'
import { ErrorPage } from './pages/error'
import { AppLayout } from './pages/layouts/app'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'transactions',
        element: <Transactions />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
