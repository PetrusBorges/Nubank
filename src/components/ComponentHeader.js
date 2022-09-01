import React, {useState} from 'react';

import { ReactComponent as LogoNuMobile } from '../svg/logonu-mobile.svg'
import { ReactComponent as LogoNuDesktop } from '../svg/logonu-desktop.svg'
import { ReactComponent as Facebook } from '../svg/icon-facebook.svg'
import { ReactComponent as YouTube } from '../svg/icon-youtube.svg'
import { ReactComponent as Instagram } from '../svg/icon-instagram.svg'
import { ReactComponent as Twitter } from '../svg/icon-twitter.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {

  AOS.init();

  const [open1, setOpen1] = useState(false) //EVENTOS
  const [open2, setOpen2] = useState(false) //EVENTOS
  const [open3, setOpen3] = useState(false) //EVENTOS
  const [open4, setOpen4] = useState(false) //EVENTOS

  return (
    <header id="header" data-aos='fade-down'>
      <nav className="navbar-mobile">
        <div className={`bx ${open4? 'active-bx' : 'inactive'}`} onClick={() => {setOpen4(!open4)}}></div>
        <div className="logo">
          <a href="#LogoNu">
            <LogoNuMobile/>
          </a>
        </div>
        <a href="#Login">Login</a>
      </nav>

      <nav className="navbar-desktop">
        <div className="navbar-desktop-item-1">
          <div className="logo">
            <a href="#LogoNu">
              <LogoNuDesktop/>
            </a>
          </div>
          <ul className="menu-desktop">

            <li className="menu-item" onClick={() => {setOpen1(!open1)}}>
              <a href="#Nubank" className="nav-link-desktop">Nubank</a>
              <ul className={`dropdown-menu ${open1? 'active' : 'inactive'}`}>
                <li className="dropdown-item"><a href="#dropdown" className="nav-link-dropdown">O Nu</a></li>
                <li className="dropdown-item"><a href="#dropdown" className="nav-link-dropdown">Carreiras</a></li>
                <li className="dropdown-item"><a href="#dropdown" className="nav-link-dropdown">Imprensa</a></li>               
              </ul>
            </li>

            <li className="menu-item" onClick={() => {setOpen2(!open2)}}>
              <a href="#Nubank" className="nav-link-desktop">Conta Digital</a>
              <ul className={`dropdown-menu ${open2? 'active' : 'inactive'}`}>
                <li className="dropdown-item"><a href="#dropdown" className="nav-link-dropdown">Crie sua conta</a></li>
                <li className="dropdown-item"><a href="#dropdown" className="nav-link-dropdown">Transferências</a></li>
                <li className="dropdown-item"><a href="#dropdown" className="nav-link-dropdown">Rendimento</a></li>               
              </ul>
            </li>

            <li className="menu-item" onClick={() => {setOpen3(!open3)}}>
              <a href="#Nubank" className="nav-link-desktop">Pra você</a>
              <ul className={`dropdown-menu ${open3? 'active' : 'inactive'}`}>
                <li className="dropdown-item"><a href="#dropdown" className="nav-link-dropdown">Comunidade</a></li>
                <li className="dropdown-item"><a href="#dropdown" className="nav-link-dropdown">Rewards</a></li>
                <li className="dropdown-item"><a href="#dropdown" className="nav-link-dropdown">Novidades</a></li>               
              </ul>
            </li>

          </ul>
        </div>

        <div className="navbar-desktop-item-2">
          <a href="#QueroSer" className="btn mr-2">Quero ser Nubank</a>
          <a href="#QueroSer">Login</a>
        </div>
      </nav>

      <nav className={`menu-mobile ${open4? 'active-menu-mobile' : 'inactive'}`}>
        <ul className="nav-list-mobile">
          <li className="mb-1"><a href="#menu-mobile" className="nav-link-mobile">Nubank</a></li>
          <li className="mb-1"><a href="#menu-mobile" className="nav-link-mobile">Conta Digital</a></li>
          <li className="mb-1"><a href="#menu-mobile" className="nav-link-mobile">Pra você</a></li>
          <li className="mb-1"><a href="#menu-mobile" className="nav-link-mobile">Quero ser Nubank</a></li>
          <li className="mb-1"><a href="#menu-mobile" className="nav-link-mobile">Redes Sociais</a></li>

          <li className="flex-center mt-3">
            <a href="#Facebook"><Facebook className='socialIcons mx-1'/></a>
            <a href="#YouTube"><YouTube className='socialIcons mx-1'/></a>
            <a href="#Instagram"><Instagram className='socialIcons mx-1'/></a>
            <a href="#Twitter"><Twitter className='socialIcons mx-1'/></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

//scrollY
function scrollHeader() {
  const nav = document.getElementById('header')

  if (this.scrollY >= 50) {
    nav.classList.add('active-header')
  } else {
    nav.classList.remove('active-header')
  }
}

window.addEventListener('scroll', scrollHeader)
