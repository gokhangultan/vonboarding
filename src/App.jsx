import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Header from "./layouts/Header"
import { Switch } from 'react-router-dom/cjs/react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './pages/Home'
import LeftSide from './layouts/LeftSide'
import Footer from './layouts/Footer'
import UserManagement from './pages/UserManagement'
import OrganizationSettings from './pages/OrganizationSettings'
import OnboardingPool from './pages/OnboardingPool'
import Vessenger from './pages/Vessenger'
import MerchantPool from './pages/MerchantPool'
import Logout from './pages/Logout'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <LeftSide />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/usermanagement" exact>
          <UserManagement />
        </Route>
        <Route path="/organizationsettings" exact>
          <OrganizationSettings />
        </Route>
        <Route path="/onboardingpool" exact>
          <OnboardingPool />
        </Route>
        <Route path="/vessenger" exact>
          <Vessenger />
        </Route>
        <Route path="/merchantpool" exact>
          <MerchantPool />
        </Route>
        <Route path="/logout" exact>
          <Logout />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
      <Footer />
      
    </>
  )
}

export default App
