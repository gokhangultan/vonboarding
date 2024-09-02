import { useEffect } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayouts'; 
import AuthLayout from './layouts/AuthLayout';
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
import ChangePasswordForm from './components/ChangePasswordForm';
import NewOrganizationForm from './components/NewOrganizationForm';
import axios from 'axios';

function App() {
  const darkMode = useSelector((store) => store.global.darkMode);
  const history = useHistory();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    const something = document.getElementsByTagName('html')[0];
    if (darkMode) {
      something.classList.remove('bg-primaryColor');
      something.classList.add('bg-white');
      something.classList.add('dark');
    } else {
      something.classList.remove('bg-white');
      something.classList.remove('dark');
      something.classList.add('bg-primaryColor');
    }
  }, [darkMode]);

  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript('/assets/libs/node-waves/waves.min.js');
    loadScript('/assets/js/pages/plugins/lord-icon-2.1.0.js');
    loadScript('/assets/js/plugins.js');
    loadScript('/assets/libs/jsvectormap/maps/world-merc.js');
    loadScript('/assets/libs/swiper/swiper-bundle.min.js');
    loadScript('/assets/js/pages/dashboard-ecommerce.init.js');
    loadScript('/assets/js/app.js');
  }, []);

  /*
    useEffect(() => {
    const checkAuthToken = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          await axios.post('XXX_ENDPOINT', { token });
          // Token is valid; proceed to app content
        } catch (error) {
          // Token is invalid; redirect to login page
          window.location('/login');
        }
      } else {
        // No token; redirect to login page
        window.location('/login');
      }
    };

    checkAuthToken();
  }, [history]);
*/
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
                <Route path="/dashboard" exact>
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
                <Route path="/changepassword" exact>
                  <ChangePasswordForm />
                </Route>
                <Route path="/merchantpool" exact>
                  <MerchantPool />
                </Route>
                <Route path="/neworganization" exact>
                  <NewOrganizationForm />
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
