import React from 'react'
import {useState} from 'react'
import {ImHome} from 'react-icons/im'
import {TiInfoLargeOutline} from 'react-icons/ti'
import './nav.css'


function Nav() {
    const [activeNav,setActiveNav] = useState('#')
    return (
      <nav>
        <a href="#"
           onClick={() => setActiveNav('#')}
           className={activeNav === '#'?'active':''}>
            <ImHome/>
           </a>

       <a href="#about" 
         onClick={() => setActiveNav('#about')} 
         className={activeNav === '#about'?'active':''}>
           <TiInfoLargeOutline/>
         </a>
      </nav>
    );
}

export default Nav