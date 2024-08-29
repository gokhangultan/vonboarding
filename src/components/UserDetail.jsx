import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

export default function UserDetail({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((store) => store.auth.user);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="dropdown ms-sm-3 header-item topbar-user dark:bg-secondaryColor bg-primaryColor ">
      <div className="d-flex p-2 ">
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
          <DropdownToggle className='dark:bg-secondaryColor bg-primaryColor border-none dark:hover:bg-secondaryColor hover:bg-primaryColor'>
            <span  className=" shadow-none hover:bg-secondaryColor  " id="page-header-user-dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="d-flex align-items-center">
                <img className="rounded-circle header-profile-user" src="src/assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                <span className="text-start ms-xl-2">
                  <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text"> <div>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}
    </div></span>
                  <span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">KLON Ödeme Kuruluşu A.Ş</span>
                </span>
              </span>
            </span>
          </DropdownToggle>
          <DropdownMenu {...args} className='dark:bg-secondaryColor bg-primaryColor '>
            <DropdownItem header><h6 className="dropdown-header">Merhaba {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}</h6></DropdownItem>
            
            <DropdownItem tag={Link} to="/profile" className='flex justify-start items-center align-middle'>
              <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> 
              <h1 className="align-middle ">Profilim</h1>
            </DropdownItem>
            
            <DropdownItem tag={Link} to="/last-activity" className='flex justify-start items-center align-middle'>
              <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> 
              <h1 className="align-middle">Son İşlemlerim</h1>
            </DropdownItem>
            
            <DropdownItem divider />
            
            <DropdownItem tag={Link} to="/users" className='flex justify-start items-center align-middle'>
              <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> 
              <h1 className="align-middle">Kullanıcı Yönetimi</h1>
            </DropdownItem>

            <DropdownItem divider />
            
            <DropdownItem tag={Link} to="/password-change" className='flex justify-start items-center align-middle'>
              <i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> 
              <h1 className="align-middle">Şifremi Değiştir</h1>
            </DropdownItem>
            
            <DropdownItem tag={Link} to="/logout" className='flex justify-start items-center align-middle'>
              <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> 
              <h1 className="align-middle" data-key="t-logout">Çıkış Yap</h1>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
