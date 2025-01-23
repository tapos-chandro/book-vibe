import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  const activeLink = ({ isActive }) => ({
    color: isActive ? '#23BE0A' : 'black',
    background: isActive ? ' white ' : 'white',
    border: isActive ? '1px solid #23BE0A' : '1px solid white',
    fontWeight: isActive ? '600' : 'normal'
  })

  let navLinks = 
    <>
      <li>
        <NavLink to='/' style={activeLink} className='flex justify-center w-full text-center'>
          Home
        </NavLink>
      </li>
      <li >
        <NavLink to='/books' style={activeLink} className='flex justify-center w-full text-center'>
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink to='/wish' style={activeLink} className='flex justify-center w-full text-center'>Pages to Read</NavLink >
      </li>
    </>
  

  return (
    <div className='navbar bg-base-100 lg:grid lg:grid-cols-3 lg:justify-between py-7'>
      <div className='p-0 navbar '>
        <a href='/' className='text-3xl font-bold'>Book Vibe</a>
      </div>
      <div className='justify-center hidden navbar-center lg:flex '>
        <ul className='flex gap-4 px-1 menu menu-horizontal'>{navLinks}</ul>
      </div>
      <div className='hidden lg:block'>
        <div className='flex justify-end gap-4'>
          <button className='btn primary-btn w-[7.25rem] h-[3.563rem] text-lg'>Sign In</button>
          <button className='btn secondary-btn w-[7.25rem] h-[3.563rem] text-lg'>Sign Up</button>
        </div>
      </div>
      <div className='navbar-end'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden' onClick={() => {setToggle(!toggle)}}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0 border-primary-color border-[1px] ${toggle && 'hidden'}`}
          >
            <div className={`flex flex-col justify-center text-center gap-2`} >{navLinks}</div>
            <div className='flex flex-col gap-2 pt-2 lg:hidden'>
            <button className='w-full p-2 primary-btn'>Sign In</button>
            <button className='w-full p-2 secondary-btn '>Sign Up</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
