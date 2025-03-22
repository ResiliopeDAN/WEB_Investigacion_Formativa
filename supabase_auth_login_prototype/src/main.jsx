import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@/components/ui/provider'
import {RouterProvider} from "react-router-dom";
import {router} from "@/router/index.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider>
          <RouterProvider router={router} />
      </Provider>
  </StrictMode>,
)
