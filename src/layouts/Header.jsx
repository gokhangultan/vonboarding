import Notification from "../components/Notification";
import UserDetail from "../components/UserDetail";

export default function Header() {
    return (
      <div id="layout-wrapper">
      <header id="page-topbar">
          <div class="layout-width">
              <div class="navbar-header">
                  <div class="d-flex">
                      <div class="navbar-brand-box horizontal-logo">
                          <a href="index.html" class="logo logo-dark">
                              <span class="logo-sm">
                                  <img src="src/assets/images/logo-sm.png" alt="" height="48" />
                              </span>
                              <span class="logo-lg">
                                  <img src="src/assets/images/logo-dark.png" alt="" height="60" />
                              </span>
                          </a>
                          <a href="index.html" class="logo logo-light">
                              <span class="logo-sm">
                                  <img src="src/assets/images/logo-sm.png" alt=""  height="48" />
                              </span>
                              <span class="logo-lg">
                                  <img src="src/assets/images/logo-light.png" alt="" height="60" />
                              </span>
                          </a>
                      </div>
                      <button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none" id="topnav-hamburger-icon">
                          <span class="hamburger-icon">
                              <span></span>
                              <span></span>
                              <span></span>
                          </span>
                      </button>
                      <div class="app-search d-none d-md-block">
                          <div class="position-relative">
                              <span class="badge bg-primary-subtle text-primary">Operasyon Müdürü</span>
                          
                              <span class="badge bg-danger-subtle text-danger">Tam Yetkili Kullanıcı</span>
                          </div>
                          
                      </div>
                  </div>

                  <div class="d-flex align-items-center">
                      <div class="ms-1 header-item d-none d-sm-flex">
                          <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none" data-toggle="lockscreen">
                              <i class='bx bx-lock fs-22'></i>
                          </button>
                      </div>
                      <div class="dropdown ms-1 topbar-head-dropdown header-item">
                          <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img  src="src/assets/images/flags/tr.svg" alt="Header Language" height="20" class="rounded" />
                          </button>
                          <div class="dropdown-menu dropdown-menu-end">
                              <a href="javascript:void(0);" class="dropdown-item notify-item language py-2" data-lang="en" title="English">
                                  <img src="src/assets/images/flags/us.svg" alt="user-image" class="me-2 rounded" height="18" />
                                  <span class="align-middle">English</span>
                              </a>
                          </div>
                      </div>
                      <div class="ms-1 header-item d-none d-sm-flex">
                          <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none" data-toggle="fullscreen">
                              <i class='bx bx-fullscreen fs-22'></i>
                          </button>
                      </div>
                      
                      <div class="ms-1 header-item d-none d-sm-flex">
                          <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode shadow-none">
                              <i class='bx bx-moon fs-22'></i>
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