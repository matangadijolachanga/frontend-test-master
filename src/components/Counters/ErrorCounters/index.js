import React from 'react'
import Button from '../../Button'
import { windowReload } from '../../../helper/window'

const ErrorCounters = () => (
    <div className="text-center" style={{ marginTop: 180 }}>
        <h1>Couldn't load the counters</h1>
        <p style={{ marginBottom: 20 }}>The internet connection appears to be offline.</p>
        <Button text="Retry" color="secondary" onClick={ () => windowReload() }/>
    </div>
)

export default ErrorCounters
