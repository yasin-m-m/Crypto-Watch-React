import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' text-3xl p-2 bg-blue-950 text-white text-center'>
       <Link to={'/'}> Crypto Watch </Link>
    </div>
  )
}

export default Nav