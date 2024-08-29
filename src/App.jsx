import { useEffect } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayouts'; 
import AuthLayout from './layouts/AuthLayout'
import Home from './pages/Home';
import UserManagement from './pages/UserManagement';
import OrganizationSettings from './pages/OrganizationSettings';
import OnboardingPool from './pages/OnboardingPool';
import Vessenger from './pages/Vessenger';
import MerchantPool from './pages/MerchantPool';
import Logout from './pages/Logout';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const darkMode = useSelector((store) => store.global.darkMode);
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
}, [darkMode]); 

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
    <div className={` ${darkMode ? 'dark bg-white' : 'bg-primaryColor'}`}>
    <Router>
      
      <Switch>
        <Route path="/login" exact>
          <AuthLayout>
            <Login />
          </AuthLayout>
        </Route>
        <Route path="/logout" exact>
          <AuthLayout>
            <Logout />
          </AuthLayout>
        </Route>
        <Route>
          <PublicLayout>
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
            </Switch>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
    <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

export default App;