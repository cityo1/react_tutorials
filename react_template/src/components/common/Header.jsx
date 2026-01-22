import React from 'react'
import {navItems, authLink} from '../../constants/data'
import { Link } from 'react-router-dom'
import './header.css'
import ModeCtrl from './ModeCtrl'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'


const Header = () => {
  const[mobileOpen, setMobileOpen] = useState(false)

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen)
  }
  return (
    <nav className='sticky top-0 z-50 border-b border-neutral-700/80 backdrop-blur-lg'>
      <div className='container relative'>
        <div className='nav-inside-wrapper flex justify-center items-center'>
          {/* logo */}
          <div className='logo-wrapper flex items-center gap-2'>
            <div className='logo w-10 h-10 rounded-full border border-neutral-700/80 flex items-center justify-center'>
              <div className='round-dot w-8 h-8 rounded-full bg-indigo-800'></div>
            </div>
            <span 
            className={'logo-text text-lg dark:text-neutral-200 light:text-neutral-950'}>AceDot.Dev</span>
          </div>
          {/* nav */}
          <ul className='nav-wrapper hidden lg:flex gap-3'>{navItems.map((item, index)=>(
            <li key={index}
            className={'dark:text-neutral-200 light:text-neutral-950'}>
              {/* 리액트에서는 a 태그를 사용하지 않고 Link 컴포넌트를 사용한다. 경로는 href 대신 to를 사용한다. */}
              <Link to={item.to}
              >{item.label}</Link>
            </li>
          ))}
          </ul>
          {/* auth */}
          <div className='info-wrapper hidden lg:flex items-center gap-2'>
            {
            authLink.map((item, index)=>(
              <Link key={index} to={item.to}
              className={`py-2 px-3 rounded-md text-neutral-200 text-xs ${index === 1 ? "bg-gradient-to-r from-indigo-500 to-indigo-800 border-0 light: text-neutral-200" : "border border-neutral-700/80 light: text-neutral-950 dark:text-neutral-200"}`}>
                {item.label}
              </Link>))
            }
            <ModeCtrl />
          </div>
          {/* Mobile Menu Button */}
          <div className='lg:hidden flex justify-end'>
          <button onClick={toggleMenu}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
          <ModeCtrl />
          </div>
        </div>

        {/* Mobile Menu Drop */}
        {
          mobileOpen && (
            <div className='absolute right-0 z-50 bg-white w-full pb-0 flex flex-col justify-center items-center lg:hidden top-full dark:bg-neutral-900 border-b border-neutral-700 mt-1'>
              <ul className='w-full'>
                {
                  navItems.map((item, index)=>(
                    <li key={index} className='py-4 border-b border-neutral-700 w-full text-center'>
                      <Link to={item.to} className='block w-full h-full'>{item.label}</Link>
                    </li>
                  ))
                }
              </ul>
              <div className='flex py-4 gap-2'>
                {
                  authLink.map((item, index)=>(
                    <Link to={item.to} 
                    className={`py-2 px-3 rounded-md text-neutral-200 text-xs ${index === 1 ? "bg-gradient-to-r from-indigo-500 to-indigo-800 border-0 light: text-neutral-200" : "border border-neutral-700/80 light: text-neutral-950 dark:text-neutral-200"}`}>{item.label}</Link>
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Header