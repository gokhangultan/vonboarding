import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faX,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Button,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { CaretDown, CaretUp } from 'react-bootstrap-icons';

export default function LeftSide() {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);

  const toggleCollapse = (index) => {
    switch(index) {
      case 1:
        setCollapse1(prev => !prev);
        break;
      case 2:
        setCollapse2(prev => !prev);
        break;
      case 3:
        setCollapse3(prev => !prev);
        break;
      case 4:
        setCollapse4(prev => !prev);
        break;
      default:
        break;
    }
  };

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

            {/* İşyeri Havuzu */}
            <NavItem>
              <Button
                color="link"
                onClick={() => toggleCollapse(1)}
                className="nav-link d-flex align-items-center w-full"
              ><div className='flex gap-2 items-center align-middle'>
                <i className="mdi mdi-store-check"></i>
                <span data-key="t-dashboards" className="ms-2">İşyeri Havuzu</span>
                {collapse1 ? (
                  <CaretUp className="ms-auto" />
                ) : (
                  <CaretDown className="ms-auto" />
                )}</div>
              </Button>
              <Collapse isOpen={collapse1}>
                <Nav vertical>
                  <NavItem>
                    <NavLink tag={Link} to="/merchantpool">Tüm Havuzu Gör</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/merchantpool">İşyeri Ekle</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/merchantpool">Havuzdaki İşyerlerim</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/merchantpool">API Servisi</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </NavItem>

            {/* Onboarding Havuzu */}
            <NavItem>
              <Button
                color="link"
                onClick={() => toggleCollapse(2)}
                className="nav-link d-flex align-items-center"
              >
                <i className="mdi mdi-briefcase-upload"></i>
                <span data-key="t-dashboards" className="ms-2">Onboarding Havuzu</span>
                {collapse2 ? (
                  <CaretUp className="ms-auto" />
                ) : (
                  <CaretDown className="ms-auto" />
                )}
              </Button>
              <Collapse isOpen={collapse2}>
                <Nav vertical>
                  <NavItem>
                    <NavLink tag={Link} to="my-enterprise-merchant.html">Tüm Üye İşyerlerim <span className="badge border border-success text-success">0</span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="compliance-review.html">Uyum Bekleyen <span className="badge border border-warning text-warning">0</span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="risk-review.html">Risk Bekleyen <span className="badge border border-warning text-warning">0</span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="bank-definition.html">Banka Tanımı <span className="badge border border-warning text-warning">0</span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="open-enterprise-merchant-list.html">Açık İşyerleri <span className="badge border border-success text-success">0</span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="close-enterprise-merchant-list.html">Kapanan İşyerleri <span className="badge border border-danger text-danger">0</span></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </NavItem>

            {/* Kuruluş Ayarları */}
            <NavItem>
              <Button
                color="link"
                onClick={() => toggleCollapse(3)}
                className="nav-link d-flex align-items-center"
              >
                <i className="mdi mdi-stove"></i>
                <span data-key="t-dashboards" className="ms-2">Kuruluş Ayarları</span>
                {collapse3 ? (
                  <CaretUp className="ms-auto" />
                ) : (
                  <CaretDown className="ms-auto" />
                )}
              </Button>
              <Collapse isOpen={collapse3}>
                <Nav vertical>
                  <NavItem>
                    <NavLink tag={Link} to="my-enterprise.html">Kuruluşum</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="my-enterprise-pos.html">Poslarım</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="my-enterprise-key.html">Key Tanımlarım</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="my-enterprise-api.html">Api Servisi</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </NavItem>

            {/* Kullanıcı Yönetimi */}
            <NavItem>
              <Button
                color="link"
                onClick={() => toggleCollapse(4)}
                className="nav-link d-flex align-items-center"
              >
                <i className="mdi mdi-stove"></i>
                <span data-key="t-dashboards" className="ms-2">Kullanıcı Yönetimi</span>
                {collapse4 ? (
                  <CaretUp className="ms-auto" />
                ) : (
                  <CaretDown className="ms-auto" />
                )}
              </Button>
              <Collapse isOpen={collapse4}>
                <Nav vertical>
                  <NavItem>
                    <NavLink tag={Link} to="/usermanagement"><FontAwesomeIcon icon={faUser} size='xl' className='px-2 text-[#46b5ff]' /> Kullanıcılar </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/usermanagement"><FontAwesomeIcon icon={faPlus} size='xl' className='px-2 text-[#46b5ff]' /> Kullanıcı Ekle</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </NavItem>

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
