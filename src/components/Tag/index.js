import React from 'react'
import './index.css'

const Tag = ({ text }) => (
    <div className="tag">
        <p className="font-size-17 font-weight-500">
            { text }
        </p>
    </div>
)

export default Tag
