import React from 'react';
import './searchbox.styles.css';

export default class SearchBox extends React.Component{
      constructor(props){
         super(props);
          this.state={searchField:''}
        }
    handleChange=e=>{
        this.setState({searchFiled:e.target.value});
    }
   render(){

  return(
        <div className='searchbox'>
           <input type='search' placeholder="Search movies" 
              onClick={this.handleChange}
            />
       </div>

     )

   }

}