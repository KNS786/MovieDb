import React,{useState} from 'react';
import './NavBar.styles.css';
export const NavBar=()=>
{  
   const [mobile,otherDevices]=useState(false);
   return(
   <div>
    <nav>
     <div className='logo'>
       Movie DB
     </div>
   <ul className='nav-links' style={{transform:mobile?"translateX(0px)":'translateX(-500px)'}}>
     <li><a>home</a> </li>
    <li><a>popular</a></li>
    <li><a>Add</a></li>
    <li><a>login</a></li>
     
    </ul>
    <i onClick={()=>otherDevices(!mobile)} className='burger' class="fas fa-bars"></i>
  </nav>
</div>
);
}

