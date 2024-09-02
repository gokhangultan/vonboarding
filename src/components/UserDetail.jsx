import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'; 

export default function UserDetail({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
  };

  return (
    <div className="dropdown ms-sm-3 header-item topbar-user ">
      <div className="d-flex p-3 ">
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
          <DropdownToggle className='bg-secondaryColor border-none hover:bg-secondaryColor'>
            <span  className=" shadow-none hover:bg-secondaryColor bg-secondaryColor " id="page-header-user-dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="d-flex align-items-center">
                <img className="rounded-circle header-profile-user" src="src/assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                <span className="text-start ms-xl-2">
                  <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Görkem Bayramoğlu</span>
                  <span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">KLON Ödeme Kuruluşu A.Ş</span>
                </span>
              </span>
            </span>
          </DropdownToggle>
          <DropdownMenu {...args}>
            <DropdownItem header><h6 className="dropdown-header">Merhaba Görkem</h6></DropdownItem>
            
            <DropdownItem tag={Link} to="/profile">
              <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> 
              <span className="align-middle">Profilim</span>
            </DropdownItem>
            
            <DropdownItem tag={Link} to="/last-activity">
              <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> 
              <span className="align-middle">Son İşlemlerim</span>
            </DropdownItem>
            
            <DropdownItem divider />
            
            <DropdownItem tag={Link} to="/users">
              <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> 
              <span className="align-middle">Kullanıcı Yönetimi</span>
            </DropdownItem>

            <DropdownItem divider />
            
            <DropdownItem tag={Link} to="/password-change">
              <i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> 
              <span className="align-middle">Şifremi Değiştir</span>
            </DropdownItem>
            
            <DropdownItem tag={Link} to="/logout" onClick={handleLogout}>
              <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> 
              <span className="align-middle" data-key="t-logout">Çıkış Yap</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
