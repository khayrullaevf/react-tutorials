import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calculator from './calculator'
import App from './App'
import RegisterForm from './components/RegisterForm'
import Users from './components/Users'

createRoot(document.getElementById('main')).render(
  <StrictMode>
   {/* <App/> */}
   {/* <App/> */}
   {/* <RegisterForm/> */}
   <Users/>
  </StrictMode>
)
