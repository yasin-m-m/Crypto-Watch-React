import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className=' bg-blue-950 text-center text-white text-2xl p-2'>&copy;{year} by <Link to={'https://www.linkedin.com/in/yasinmm/'} className=' underline'> Yasin M M </Link> Project</div>
  )
}

export default Footer