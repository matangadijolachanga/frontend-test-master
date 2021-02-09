import React, { useState, useEffect, useContext } from 'react'
import CounterContext from '../../../context/Counter'
import { sumConters } from '../../../helper/counters'
import { arrayIsNotEmpty } from '../../../helper/validations'

const Items = ({ counters }) => {

    const { selected_counters } = useContext(CounterContext)

    const [items, setItems] = useState({
        total: 0,
        times: 0
    })
    
    useEffect(() => {
        setItems({
            total: counters.length,
            times: sumConters(counters)
        })
    }, [counters])
    
    
    return(
        <div className="d-flex align-items-center pr-3 pl-3">
            { arrayIsNotEmpty(selected_counters.data) ? (
                 <p className="font-weight-600 text-orange">
                    { selected_counters.total } selected
                </p>
            ): ( <>
                <p className="font-weight-600 mr-3">
                    { items.total } items
                </p>

                <p className="font-weight-500 text-dark-silver">
                    { items.times } times
                </p>
                </>
            )}
        </div>
    )
}

export default Items
