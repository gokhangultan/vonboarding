import Notification from "../components/Notification";
import UserDetail from "../components/UserDetail";

export default function Header() {
    return (
      <div id="layout-wrapper">
      <header id="page-topbar">
          <div className="layout-width">
              <div className="navbar-header">
                  <div className="d-flex">
                      <div className="navbar-brand-box horizontal-logo">
                          <a href="index.html" className="logo logo-dark">
                              <span className="logo-sm">
                                  <img src="src/assets/images/logo-sm.png" alt="" height="48" />
                              </span>
                              <span className="logo-lg">
                                  <img src="src/assets/images/logo-dark.png" alt="" height="60" />
                              </span>
                          </a>
                          <a href="index.html" className="logo logo-light">
                              <span className="logo-sm">
                                  <img src="src/assets/images/logo-sm.png" alt=""  height="48" />
                              </span>
                              <span className="logo-lg">
                                  <img src="src/assets/images/logo-light.png" alt="" height="60" />
                              </span>
                          </a>
                      </div>
                      <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none" id="topnav-hamburger-icon">
                          <span className="hamburger-icon">
                              <span></span>
                              <span></span>
                              <span></span>
                          </span>
                      </button>
                      <div className="app-search d-none d-md-block">
                          <div className="position-relative">
                              <span className="badge bg-primary-subtle text-primary">Operasyon Müdürü</span>
                          
                              <span className="badge bg-danger-subtle text-danger">Tam Yetkili Kullanıcı</span>
                          </div>
                          
                      </div>
                  </div>

                  <div className="d-flex align-items-center">
                      <div className="ms-1 header-item d-none d-sm-flex">
                          <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none" data-toggle="lockscreen">
                              <i className='bx bx-lock fs-22'></i>
                          </button>
                      </div>
                      <div className="dropdown ms-1 topbar-head-dropdown header-item">
                          <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                      
                      <div className="ms-1 header-item d-none d-sm-flex">
                          <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode shadow-none">
                              <i className='bx bx-moon fs-22'></i>
                          </button>
                      </div>

                    <Notification />  
                    <UserDetail />
                  </div>
              </div>
          </div>
      </header>
     
  
     
  </div>
  
    );
  }