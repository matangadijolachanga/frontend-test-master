import React from 'react'
import WelcomeSVG from '../../assets/images/welcome.svg'
import Button from '../Button'
import './index.css'

const Welcome = () => (
    <div className="content-center flex-direction-column">
        <img src={ WelcomeSVG } className="welcome-img"/>
        
        <h1>Welcome to Counters</h1>
        
        <p className="welcome-text">
            Capture cups of lattes, frapuccinos, or anything else that can be counted.
        </p>
        
        <Button type="link" href="/home" text="Get started"/>
    </div>
)

export default Welcome
