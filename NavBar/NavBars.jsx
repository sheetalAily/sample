import React from 'react'
import STYLE from "./navbar.module.css"
const NavBars = () => {
  return (
    <>
    <div className={STYLE.nav111}>
        <div className={STYLE.nav1111}>
       <h1 className={STYLE.NavBars}>Flipkart</h1>
       <h2 className={STYLE.nav11}>Explore<span className={STYLE.NavBars}> Plus +</span></h2>
       </div>
       <div class={STYLE.nav123}>
        <ul>
        <li><input type="text" placeholder='Search for the item'/></li>
        <li><button>Login</button></li>
        <li><a href="">Become a Seller</a></li>
        <li><a href="">More</a></li>
        <li><a href="">Cart</a></li>
        </ul>
       </div>

    </div>
    <br />  
 


    <div className={STYLE.nav222}>
        <div className={STYLE.nav2}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyEHz_X4xmX_8jf_wRxuKYsO0irnfmPdOSA&usqp=CAU" alt="" />
       </div>
       <div className={STYLE.nav22}> 
        <ul>
            <li><a href=""> Amazon miniTv</a></li>
            <li><a href="">Best sellars</a></li>
            <li><a href="">Mobiles</a></li>
            <li><a href="">Customer Services</a></li>
            <li><a href="">Today's Deal</a></li>  
           
        </ul>
       </div>
    </div>
    <br />

    <div className={STYLE.nav333}>
        <div className={STYLE.nav3}>
          <h1>meesho</h1>
           <div/>          
       <div className={STYLE.nav33}> 
        <ul>
            <li> <input typeplaceholder='Try Saree,Kurti or Search by product'/></li>
            <li><a href="">Download  App</a></li>
            <li><a href="">Become a supplier</a></li>
            <li><a href="">Profile</a></li>
            <li><a href="">Cart</a></li>  
            
        </ul>
       </div>
    </div>
   
    </div>
    <br />


    <div className={STYLE.nav444}>
        <div className={STYLE.nav4}>
           <h1>M</h1>
            </div>
       <div className={STYLE.nav44}> 
        <ul>
            <li><a href="">Men </a></li>
            <li><a href="">Women</a></li>
            <li><a href="">Kids</a></li>
            <li><a href="">Home & Living</a></li>
            <li><a href="">Beauty</a></li> 
            <li><a href="">Studio</a></li>
           
        </ul>
       </div>
    </div>
    <br />

    <div className={STYLE.nav555}>
        <div className={STYLE.nav5}>
           <img src="data:image/png;base64,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" alt="" />
            </div>
       <div className={STYLE.nav55}> 
        <ul>
            <li><a href="">Product </a></li>
            <li><a href="">Learn</a></li>
            <li><a href="">Safety</a></li>
            <li><a href="">Support</a></li>
            <li><a href="">Download</a></li> 
            
           
        </ul>
       </div>
    </div>
    </>
  )
}

export default NavBars