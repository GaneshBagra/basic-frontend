import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/'>
    <Layout>
    <Routes> 
      <Route path='/login' element={<App />} />
    </Routes>
    </Layout>
    </BrowserRouter>
  </StrictMode>,
)
