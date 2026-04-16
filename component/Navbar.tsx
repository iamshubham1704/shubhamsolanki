import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-5  -translate-x-0.5 w-full z-50 flex justify-center'>
        <ul className="flex gap-6 text-white text-sm">
          <li className="cursor-pointer hover:opacity-70">Home</li>
          <li className="cursor-pointer hover:opacity-70">About</li>
          <li className="cursor-pointer hover:opacity-70">Projects</li>
          <li className="cursor-pointer hover:opacity-70">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar