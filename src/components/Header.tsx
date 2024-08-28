import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div>
        <h2 className='logo'>Daily News</h2>
      </div>
      <div className='menu'>
        <div className='m-item'>
          <span>HOME</span>
        </div>
        <div className='m-item'>
          <span>MY NEWS</span>
        </div>
      </div>
    </div>
  )
}

export default Header;
