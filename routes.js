import React from 'react';
import {Home} from './views/Home/home.component';
import {Popular} from './views/Popular/popular.component';
import {Upcoming} from './views/Upcoming/Upcoming.component';
import {NowPlay} from './views/NowPlaying/NowPlay.component';
import {TopRated} from './views/TopRated/TopRated.component';
import {login} from './views/login/login.component';
import {Route,Switch,Redirect} from 'react-router-dom';

export const Routes=()=>{
    return(
         <div>
            <Switch>
                <Route exact path='/Home' component={Home}/>
                <Route exact path='/'> <Redirect to='/Home' /></Route>
              <Route exact path='/Popular' component={Popular}/>
               <Route exact path='/Upcoming' component={Upcoming}/>
               <Route exact path='/NowPlay' component={NowPlay}/>
               <Route exact path='/TopRated' component={TopRated}/>
               <Route exact path='/login' component={login}/>
         </Switch>

      </div>

    );

}

