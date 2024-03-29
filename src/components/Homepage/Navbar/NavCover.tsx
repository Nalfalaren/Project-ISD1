import React from 'react';
import { useState, useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { LoginResponse } from '../../../interface/IUSerInfo';

const NavCover = () => {
  const [isActive, setIsActive] = useState<LoginResponse | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
        const token = localStorage.getItem('token');
        // do sth
    }
    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsActive(null);
  }
  return (
    <div>
      <div className='bg-[#D36B97] flex justify-end items-center gap-[10px] py-2 md:px-16 px-2 w-full'>
        <div className='md:block hidden'>
          <ul className='flex flex-row justify-center gap-[15px] items-center'>
            <li className='text-white'>Trang chủ</li>
            <li className='text-white'>Giới thiệu</li>
            <li className='text-white'>Liên hệ</li>
            <li className='text-white'>Bản đồ đến shop</li>
            <li className='text-white'>Tuyển dụng</li>
            <li className='text-white'>{isActive ? <div>Xin chào<span>{isActive.full_name}</span><span onClick={handleLogout}>Đăng xuất</span></div> : <div className='flex flex-row gap-[10px]'><Link to='/login'>Đăng nhập</Link><Link to='/sign_up'>Đăng ký</Link></div>}</li>
          </ul>
        </div>
        <div className='md:text-white md:block hidden'>
          <FacebookIcon />
          <TwitterIcon />
          <MailIcon />
        </div>
      </div>
      </div>
  );
}

export default NavCover;
