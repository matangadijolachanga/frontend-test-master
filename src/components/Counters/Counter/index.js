import React, { useState, useContext } from 'react'
import CounterContext from '../../../context/Counter'
import { useQueryClient, useMutation } from 'react-query'
import { incrementCounter, decrementCounter } from '../../../api/counterAPI'
import { foundCounter } from '../../../helper/counters'
import { GoPlus, GoDash } from 'react-icons/go'
import Button from '../../Button'
import Alert from '../../Alert'

const Counter = ({ id, title, count, countZero }) => {

    const { selected_counters, addSelectedCounter } = useContext(CounterContext)

    const [selected, setSelected] = useState(foundCounter(id, selected_counters.data, 'id'))
    const [error, setError] = useState(false)
    
    const selectedCounter = () => {
        setSelected(!selected)
        addSelectedCounter(id, title, count)
    }

    const queryClient = useQueryClient()

    const counterMutation = {
        onMutate: () => setError(false),
        onError: () => setError(true),
        onSuccess: () => queryClient.invalidateQueries('counters')
    }
    
    const incrementCounterMutation = useMutation(id => incrementCounter(id), counterMutation)
    const decrementCounterMutation = useMutation(id => decrementCounter(id), counterMutation)

    return(
        <div 
            className={ `${ selected ? 'bg-orange-opacity' : '' } cursor-pointer d-flex justify-content-between align-items-center pt-4 pb-4 pl-3 pr-3 mt-2 mb-2 rounded` } 
            onDoubleClick={ () => selectedCounter() }>
            
            <p className="text-counter font-size-17 font-weight-400">{ title }</p>

            <div className="d-flex align-items-center ml-4">
                
                <Button
                    text={ <GoDash/> }
                    color="text"
                    disabled={ countZero }
                    defaultStyle={ false }
                    className={ `mr-2 ${ countZero ? 'text-dark-silver' : 'text-orange cursor-pointer' }`}
                    onClick={ () => decrementCounterMutation.mutate(id) }
                />
                
                <span className={ `font-size-20 font-weigth-600 ${ countZero ? 'text-dark-silver' : 'text-graphito' }` }>
                    { count }
                </span>

                <Button
                    text={ <GoPlus/> }
                    color="text"
                    defaultStyle={ false }
                    className="btn-text ml-2 cursor-pointer text-orange"
                    onClick={ () => incrementCounterMutation.mutate(id) }
                />

            </div>

            { error && <Alert 
                title={ `Couldn't update ${ title } to 1`}
                textError="The Internet connection appears to be offline."
            /> }

        </div>
    )
}

export default Counter
