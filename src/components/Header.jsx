import React from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <h1 className="logo">GEATHERED NEWS</h1>
      <ul className='nav-list'>
        <li>Home</li>
        <li>Politics</li>
        <li>Sport</li>
        <li>Science</li>
        <li>Technology</li>
        <li>Culture</li>
        <li>Weather</li>
      </ul>
    </header>
  )
}