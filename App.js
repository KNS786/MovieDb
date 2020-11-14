import React from 'react';
import {Routes} from './routes';
//import SearchBox from './components/Search-box.component'
//import {NavBar} from './components/NavBar/NavBar.component';
//import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component{
     render(){
        return(
            <div className='App'>
               <Routes/>   
           </div>
          )
       }

}
export default App;
