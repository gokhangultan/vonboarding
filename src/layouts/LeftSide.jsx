import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';

export default function LeftSide() {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [dropdown4Open, setDropdown4Open] = useState(false);

  const toggleDropdown1 = () => setDropdown1Open(prevState => !prevState);
  const toggleDropdown2 = () => setDropdown2Open(prevState => !prevState);
  const toggleDropdown3 = () => setDropdown3Open(prevState => !prevState);
  const toggleDropdown4 = () => setDropdown4Open(prevState => !prevState);

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

            {/* İşyeri Havuzu*/}
            <Dropdown nav isOpen={dropdown1Open} toggle={toggleDropdown1}>
              <DropdownToggle nav caret>
                <i className="mdi mdi-store-check"></i> <span data-key="t-dashboards">İşyeri Havuzu</span>
              </DropdownToggle>
              <DropdownMenu className="p-3">
                <DropdownItem tag={Link} to="/merchantpool">Tüm Havuzu Gör</DropdownItem>
                <DropdownItem tag={Link} to="/merchantpool">İşyeri Ekle</DropdownItem>
                <DropdownItem tag={Link} to="/merchantpool">Havuzdaki İşyerlerim</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/merchantpool">API Servisi</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Onboarding Havuzu */}
            <Dropdown nav isOpen={dropdown2Open} toggle={toggleDropdown2}>
              <DropdownToggle nav caret>
                <i className="mdi mdi-briefcase-upload"></i> <span data-key="t-dashboards">Onboarding Havuzu</span>
              </DropdownToggle>
              <DropdownMenu className="p-3">
                <DropdownItem tag={Link} to="my-enterprise-merchant.html">Tüm Üye İşyerlerim <span className="badge border border-success text-success">0</span></DropdownItem>
                <DropdownItem tag={Link} to="compliance-review.html">Uyum Bekleyen <span className="badge border border-warning text-warning">0</span></DropdownItem>
                <DropdownItem tag={Link} to="risk-review.html">Risk Bekleyen <span className="badge border border-warning text-warning">0</span></DropdownItem>
                <DropdownItem tag={Link} to="bank-definition.html">Banka Tanımı <span className="badge border border-warning text-warning">0</span></DropdownItem>
                <DropdownItem tag={Link} to="open-enterprise-merchant-list.html">Açık İşyerleri <span className="badge border border-success text-success">0</span></DropdownItem>
                <DropdownItem tag={Link} to="close-enterprise-merchant-list.html">Kapanan İşyerleri <span className="badge border border-danger text-danger">0</span></DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Kuruluş Ayarları */}
            <Dropdown nav isOpen={dropdown3Open} toggle={toggleDropdown3}>
              <DropdownToggle nav caret>
                <i className="mdi mdi-stove"></i> <span data-key="t-dashboards">Kuruluş Ayarları</span>
              </DropdownToggle>
              <DropdownMenu className="p-3">
                <DropdownItem tag={Link} to="my-enterprise.html">Kuruluşum</DropdownItem>
                <DropdownItem tag={Link} to="my-enterprise-pos.html">Poslarım</DropdownItem>
                <DropdownItem tag={Link} to="my-enterprise-key.html">Key Tanımlarım</DropdownItem>
                <DropdownItem tag={Link} to="my-enterprise-api.html">Api Servisi</DropdownItem>
              </DropdownMenu>
            </Dropdown>
             {/* Kullanıcı Yönetimi */}
             <Dropdown nav isOpen={dropdown4Open} toggle={toggleDropdown4}>
              <DropdownToggle nav caret>
                <i className="mdi mdi-stove"></i> <span data-key="t-dashboards">Kullanıcı Yönetimi</span>
              </DropdownToggle>
              <DropdownMenu className="p-3">
                <DropdownItem tag={Link} to="/usermanagement">Kullanıcılar</DropdownItem>
                <DropdownItem tag={Link} to="/usermanagement">Kullanıcı Ekle</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
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
