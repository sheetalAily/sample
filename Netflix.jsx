import React, { Component } from 'react'
import STYLE from "./netflix.module.css"


const Netflix = () => {
  return (
    <div className={STYLE.main}>
      <div className={STYLE.a}>
        <ul>
          <li>
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" />
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
           <button>SignUp</button>
          </li>
          <li><button>Login</button></li>
          </ul>
          <div>
          <li className={STYLE.btn}>
            <input type="Search " placeholder='Search' />
          </li>
          </div>
    </div>
    </div>
    
  )
}

export default Netflix