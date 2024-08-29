
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { faBell, faClock, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Notification({ direction, ...args }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div className="d-flex p-5">
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
          <DropdownToggle className='bg-white rounded-none border-none' ><FontAwesomeIcon icon={faBell}  size='xl' className=' text-[#46b5ff]' /> </DropdownToggle>
          <DropdownMenu {...args} className='w-[300px] bg-[#4b38b3] py-2'>
            <DropdownItem header><div className=' flex  justify-between align-middle items-center'><span className='text-base text-white font-semibold '>Bildirimler</span>
            <button disabled className='bg-white px-2 py-1 rounded-md text-[13px] font-semibold text-black'>1 Yeni</button>
            </div></DropdownItem>
            <div className='bg-white'>
            <DropdownItem disabled className='p-4'><div className='flex gap-3'>
                <button className='p-1'><FontAwesomeIcon icon={faCommentDots}  size='2xl' className=' text-red-300' /> </button>
                <div className='flex flex-col gap-2'>
                    <span className='text-primaryColor font-semibold'>Bildirim Başlık</span>
                    <h1>Bildirim Açıklama</h1>
                    <h1 className='text-xs'><FontAwesomeIcon icon={faClock}  size='lg' className=' text-[#878a99]' /> 13 DAKİKA ÖNCE</h1>
                </div>
                </div></DropdownItem>
                <div className="flex items-center justify-center pb-4">
  <button className="flex justify-center items-center gap-3 px-2 text-[#45cb85] bg-[#e3f7ed] rounded-lg py-2 hover:text-white hover:bg-[#45cb85]">
    Tümünü Okundu İşaretle 
    <FontAwesomeIcon
      icon={faCheck}
      size="lg"
      className="text-[#45cb85]"
      style={{ transition: 'color 0.2s ease' }} 
    />
  </button>
</div>
            
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  };
  
 