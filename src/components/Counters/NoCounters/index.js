import React from 'react'

const NoCounters = ({ noResults }) => (
    <div className="text-center" style={{ marginTop: 180 }}>
        { noResults ? <p className="font-size-22 text-dark-silver">No results</p> : (
            <>
                <h1>No counters yet</h1>
                <p style={{ padding: '0 10px' }}>“When I started counting my blessings, my whole life turned around.”</p>
                <p>—Willie Nelson</p>
            </>
        )}
    </div>
)

export default NoCounters
