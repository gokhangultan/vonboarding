import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import Notification from "../components/Notification";
import UserDetail from "../components/UserDetail";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Header() {
    const darkMode = useSelector((store) => store.global.darkMode);

    const dispatch = useDispatch();

   const toggleDarkMode = () => {
    dispatch({ type: "DARK_MODE" });
    
    const currentDarkMode = !darkMode;
    
    localStorage.setItem("darkMode", JSON.stringify(currentDarkMode));
    
    notifyTheme(currentDarkMode); 
};
    

let notifyTheme = (isDarkMode) => {
    toast.success(!isDarkMode ? 'DARK MODE AÇIK' : 'DARK MODE KAPALI', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: !isDarkMode ? "dark" : "light", 
    });
};
    return (
      <div id="layout-wrapper " className="dark:bg-secondaryColor bg-primaryColor py-2">
      <header id="page-topbar " className="">
          <div className="layout-width ">
              <div className="navbar-header ">
                  <div className="d-flex ">
                      
                      <button type="button" className=" btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none" id="topnav-hamburger-icon">
                          <span className="hamburger-icon">
                              <span></span>
                              <span></span>
                              <span></span>
                          </span>
                      </button>
                      <div className="app-search d-none d-md-block">
                          <div className="position-relative flex flex-col gap-2">
                              <span className="badge bg-primary-subtle text-primary">Operasyon Müdürü</span>
                          
                              <span className="badge bg-danger-subtle text-danger">Tam Yetkili Kullanıcı</span>
                          </div>
                          
                      </div>
                  </div>

                  <div className="flex justify-between gap -2 align-middle items-center">
                      
                      <div className="dropdown ms-1 topbar-head-dropdown header-item">
                          <button type="button" className=" btn-topbar rounded-full shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img  src="src/assets/images/flags/tr.svg" alt="Header Language" height="20" className="rounded" />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                              <a href="javascript:void(0);" className="dropdown-item notify-item language py-2" data-lang="en" title="English">
                                  <img src="src/assets/images/flags/us.svg" alt="user-image" className="me-2 rounded" height="18" />
                                  <span className="align-middle">English</span>
                              </a>
                          </div>
                      </div>
                     
                      <div className="ms-1 header-item d-none d-sm-flex">
                          <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none" data-toggle="fullscreen">
                              <i className='bx bx-fullscreen fs-22'></i>
                          </button>
                      </div>
                      
                      <button onClick={toggleDarkMode} className="">
                    <span className={`rounded-full p-2 ${darkMode ? 'bg-yellow-400' : 'bg-gray-300'}`}>
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="xl"/>
                        <FontAwesomeIcon icon={darkMode ? faToggleOn : faToggleOff} />
                    </span>
                    
                      </button>
                    <Notification />  
                    <UserDetail />
                  </div>
              </div>
          </div>
      </header>
     
  
     
  </div>
  
    );
  }