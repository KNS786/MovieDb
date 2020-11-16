import React from 'react';
import {NavBar} from './components/Navbar/Navbar.component';

class App extends React.Component{
   constructor(){
     super();
      this.state={
        movies:['spirder man ','bar man','Iron man']
       }
  }
   componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/550?api_key=881bbb911bc6b55a452637b887993bb1")
    .then(response=>response.json())
    .then(movie=>this.setState({movies:movie}),(el)=>console.log(el))

  }
  render(){
     return(
     <div className='App'>
        {
          this.state.movies.map(movie=>(
            <h1>{movie.name}</h1>

         ))
        }
        <NavBar/>
     </div>

      )

  }


}
export default App;
