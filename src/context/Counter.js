import React, { useState } from 'react'
import { foundCounter } from '../helper/counters'

const CounterContext = React.createContext()

const CounterProvider = ({ children }) => {

    const [selected_counters, setSelectedCounters] = useState({
        data: [],
        total: 0
    })

    const addSelectedCounter = (id, title = null, count = 0) => {
        
        const data = selected_counters.data
        
        if(foundCounter(id, data, 'id')){
            const index = data.map(item => item.id).indexOf(id)
            data.splice(index, 1)
        }
        else {
            data.push({ id, title, count })
        }

        setSelectedCounters({
            data,
            total: data.length
        })
    }

    return(
        <CounterContext.Provider value={{ selected_counters, addSelectedCounter }}>
            { children }
        </CounterContext.Provider>
    )
}

export { CounterContext as default, CounterProvider }
