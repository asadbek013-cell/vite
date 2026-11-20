import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Navbar from "./components/Navbar"

const App = () => {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route   path="/"  element={<HomePage/>}  />
    <Route   path="/about"  element={<AboutPage/>}  />
    <Route   path="/contact"  element={<ContactPage/>}  />
    <Route   path="/login"  element={<LoginPage/>}  />
    <Route   path="/register"  element={<RegisterPage/>}  />
    <Route   path="/navbar"  element={<Navbar/>}  />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
