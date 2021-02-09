import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Welcome from '../components/Welcome'
import Counters from '../components/Counters'
import 'typeface-nunito'
import './App.css'

const App = () => (
    <div className="App">
        <Switch>
            <Route path="/" exact component={ Welcome }/>
            <Route path="/home" exact component={ Counters }/>        
        </Switch>
    </div>
) 

export default App
