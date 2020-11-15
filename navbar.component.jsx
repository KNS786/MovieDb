import React,{useState} from 'react';

const navbar =()=>{  
  const[mobile,otherDevices]=useState(false);
   return(   
     <div>
     <nav>
        <div className='logo'> React Nav</div>
        <ul className='nav-link' style={{transform:mobile?'translateX(0px)': 'translateX(-500px)'}} >
 
             <li><a>Home</a></li>
             <li><a>Popular</a></li>
             <li><a>Add</a></li>
             <li><a>login</a></li>

        </ul>
        <i onClick={()=>otherDevices(!mobile)} class="fas fa-bars burger"></i>
   </nav>
</div>

    )

}

export default navbar;
