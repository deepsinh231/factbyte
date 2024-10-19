import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { Dashboard, Mobile360 } from './Page/index.js'
import { DashboardRout } from './Components/index.js'
import Store from './Store/Store.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <DashboardRout />,
      },
      {
        path: "/mobile-360",
        element: <Mobile360 />,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)