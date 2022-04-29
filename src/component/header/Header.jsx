import React from 'react'
import './header.css';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <div className='k-container-header'>
        <div><img src={logo} alt='logo' width={100}></img></div>
    </div>
  )
}
