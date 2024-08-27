import { Link } from "react-router-dom";

export default function LeftSide() {
  return (
    <div className="app-menu navbar-menu">
      <div className="navbar-brand-box">
        <Link to="/" className="logo logo-dark">
          <span className="logo-sm">
            <img src="src/assets/images/logo-sm.png" alt="" height="48" />
          </span>
          <span className="logo-lg">
            <img src="src/assets/images/logo-dark.png" alt="" height="60" />
          </span>
        </Link>
        <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
          <i className="ri-record-circle-line"></i>
        </button>
      </div>

      <div id="scrollbar">
        <div className="container-fluid">
          <div id="two-column-menu"></div>
          <ul className="navbar-nav" id="navbar-nav">
            <li className="menu-title"><span data-key="t-menu">Menu</span></li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="mdi mdi-speedometer"></i> <span data-key="t-widgets">Özetim</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/merchantpool" className="nav-link menu-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="isyerihavuzu">
                <i className="mdi mdi-store-check"></i> <span data-key="t-dashboards">İşyeri Havuzu</span>
              </Link>
              <div className="collapse menu-dropdown" id="merchantpool">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="merchant-pool.html" className="nav-link" data-key="t-analytics"> Tüm Havuzu Gör <span className="badge border border-success text-success">0</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="add-merchant.html" className="nav-link" data-key="t-analytics"> İşyeri Ekle </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="my-merchant.html" className="nav-link" data-key="t-analytics"> Havuzdaki İşyerlerim <span className="badge border border-warning text-warning">0</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="merchant-api.html" className="nav-link" data-key="t-analytics"> Api Servisi </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/onboardingpool" className="nav-link menu-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="onboardinghavuzu">
                <i className="mdi mdi-briefcase-upload"></i> <span data-key="t-dashboards">Onboarding Havuzu</span>
              </Link>
              <div className="collapse menu-dropdown" id="onboardinghavuzu">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="my-enterprise-merchant.html" className="nav-link" data-key="t-analytics"> Tüm Üye İşyerlerim <span className="badge border border-success text-success">0</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="compliance-review.html" className="nav-link" data-key="t-analytics"> Uyum Bekleyen <span className="badge border border-warning text-warning">0</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="risk-review.html" className="nav-link" data-key="t-analytics"> Risk Bekleyen <span className="badge border border-warning text-warning">0</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="bank-definition.html" className="nav-link" data-key="t-analytics"> Banka Tanımı <span className="badge border border-warning text-warning">0</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="open-enterprise-merchant-list.html" className="nav-link" data-key="t-analytics"> Açık İşyerleri <span className="badge border border-success text-success">0</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="close-enterprise-merchant-list.html" className="nav-link" data-key="t-analytics"> Kapanan İşyerleri <span className="badge border border-danger text-danger">0</span></Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/organizationsettings" className="nav-link menu-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                <i className="mdi mdi-stove"></i> <span data-key="t-dashboards">Kuruluş Ayarları</span>
              </Link>
              <div className="collapse menu-dropdown" id="sidebarDashboards">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="my-enterprise.html" className="nav-link" data-key="t-analytics"> Kuruluşum </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="my-enterprise-pos.html" className="nav-link" data-key="t-analytics"> Poslarım </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="my-enterprise-key.html" className="nav-link" data-key="t-analytics"> Key Tanımlarım </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="my-enterprise-api.html" className="nav-link" data-key="t-analytics"> Api Servisi </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/usermanagement" className="nav-link menu-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="kullaniciyonetimi">
                <i className="mdi mdi-account-cog"></i> <span data-key="t-dashboards">Kullanıcı Yönetimi</span>
              </Link>
              <div className="collapse menu-dropdown" id="kullaniciyonetimi">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="users.html" className="nav-link" data-key="t-analytics"> Kullanıcılar </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="add-users.html" className="nav-link" data-key="t-analytics"> Kullanıcı Ekle </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/vessenger" className="nav-link menu-link">
                <i className="mdi mdi-message-badge-outline"></i> <span data-key="t-widgets">Vessenger <span className="badge border border-danger text-danger">0</span></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link menu-link">
                <i className="mdi mdi-location-exit"></i> <span data-key="t-widgets">Çıkış</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-background"></div>
    </div>
  );
}
