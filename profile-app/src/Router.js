import React from 'react'
import Profile from './containers/Profile'
import Home from './containers/home'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

const Router=()=>(
    <BrowserRouter>
       <Switch>
           <Route exact path='/profile' component={Profile}/>
           <Route exact path='/home' component={Home}/>
       </Switch>
    
    </BrowserRouter>
)

export default Router;