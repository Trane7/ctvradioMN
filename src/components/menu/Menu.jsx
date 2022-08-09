import React from 'react';
import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#hero">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#catalog">Catalog</a>
            </li>
        </ul>
    </div>
  )
}
