import { useEffect, useState } from 'react'
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
  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };
  
    loadScript('/assets/libs/bootstrap/js/bootstrap.bundle.min.js');
    loadScript('/assets/libs/simplebar/simplebar.min.js');
    loadScript('/assets/libs/node-waves/waves.min.js');
    loadScript('/assets/libs/feather-icons/feather.min.js');
    loadScript('/assets/js/pages/plugins/lord-icon-2.1.0.js');
    loadScript('/assets/js/plugins.js');
    loadScript('/assets/libs/apexcharts/apexcharts.min.js');
    loadScript('/assets/libs/jsvectormap/js/jsvectormap.min.js');
    loadScript('/assets/libs/jsvectormap/maps/world-merc.js');
    loadScript('/assets/libs/swiper/swiper-bundle.min.js');
    loadScript('/assets/js/pages/dashboard-ecommerce.init.js');
    loadScript('/assets/js/app.js');
  }, []);  

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
