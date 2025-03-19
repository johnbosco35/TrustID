// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import { mainRouter } from './router/mainRouter.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//    <RouterProvider router={mainRouter}/>
//   </StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

