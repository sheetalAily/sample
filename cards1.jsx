import React from 'react'
import './global.css'
import { useState } from 'react';

const Cards = (props) => {

  let[flag,setFlag]=useState("🤍");
  // let symbol="♡"
    function handleHeart(){
      setFlag("❤️")
     
    }
  return (
    <div className='main'>
      <div className='card'>
      <img  src={props.img} alt=""  />
      <div className='content'>
        <p style={{fontSize:"20px",color:"black"}}>{props.name}</p>
        <p>✉️{props.email}</p>
        <p>☎️{props.phone}</p>
        <p>🌐{props.website}</p>
        </div>
        <div className='emojis'>
        <p onClick={handleHeart}>{flag}</p>  
        <p>✍🏻</p>
        <p>🗑️</p>
        </div>
      </div>
      
    </div>
  )
}

export default Cards