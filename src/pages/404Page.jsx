import React from 'react'
import img from '../assets/images/404.svg'
import "../css/404Page.css"
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='err-pb'>
      <img src={img} alt="" />
      
      
      <div className="pb-bt">
        <Link to='/'>
        <button>Back to Home</button>
        </Link>
      </div>
      
      
    </div>
  )
}

export default PageNotFound