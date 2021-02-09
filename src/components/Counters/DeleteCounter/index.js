import React, { useState, useContext } from 'react'
import { useQueryClient, useMutation } from 'react-query'
import { deleteCounter } from '../../../api/counterAPI'
import CounterContext from '../../../context/Counter'
import { arrayMoreThanOneItem } from '../../../helper/validations'
import Button from '../../Button'
import Alert from '../../Alert'
import { IoTrashOutline } from 'react-icons/io5'

const DeleteCounter = ({ counters }) => {
    
    const { addSelectedCounter } = useContext(CounterContext)

    const [alertDelete, setAlertDelete] = useState(false)
    const [alertError, setAlertError] = useState(false)

    const titleDelete = `Delete the ${ arrayMoreThanOneItem(counters.data) ? `${ counters.total } counters?` : `the “${ counters.data[0].title }” counter?` }`
    const titleError = `Couldn’t delete ${ arrayMoreThanOneItem(counters.data) ? `${ counters.total } counters` : `“${ counters.data[0].title }”` }`

    const queryClient = useQueryClient()

    const deleteCounterMutation = useMutation((id) => deleteCounter(id), {
        onMutate: (id) => {
            setAlertError(false)
        },
        onError: () => setAlertError(true),
        onSuccess: (data) => {
            setAlertDelete(false)
            addSelectedCounter(data.data)
            queryClient.invalidateQueries('counters')
        }
    })

    const deleteCounters = () => {
        counters.data.map(counter => deleteCounterMutation.mutate(counter.id))
    }
    
    return(
        <div>

            <Button 
                color="text" 
                text={ <IoTrashOutline className="text-destroy"/> } 
                onClick={ () => setAlertDelete(!alertDelete) }
                className="mr-3"
            />

            { alertDelete && (
                <Alert
                    title={ titleDelete }
                    textError="This cannot be undone."
                    btnDismissText="Cancel"
                    btnAction={ true }
                    btnActionColor="destroy"
                    btnActionText="Delete"
                    btnActionOnClick={ () => deleteCounters() }
                    btnActionClassName="text-destroy"
                />
            )}

            { alertError && (
                <Alert
                    title={ titleError }
                    textError="The Internet connection appears to be offline."
                    btnDismissText="Cancel"
                    btnDismissColor="secondary"
                    btnAction={ true }
                    btnActionColor="primary"
                    btnActionText="Retry"
                    btnActionOnClick={ () => deleteCounters() }
                    btnActionClassName="ml-2"
                />
            )}
        </div>
    )
}

export default DeleteCounter
