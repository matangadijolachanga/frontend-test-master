import React, { useState } from 'react'
import { useQueryClient, useMutation } from 'react-query'
import { getCounters } from '../../../api/counterAPI'
import { IoRefresh } from 'react-icons/io5'
import Button from '../../Button'

const Items = () => {

    const queryClient = useQueryClient()

    const [refresh, setRefresh] = useState(false)
    
    const getCountersMutation = useMutation(() => getCounters, {
        onMutate: () => setRefresh(true),
        onSuccess: () => {
            setTimeout(() => {
                setRefresh(false)
                queryClient.invalidateQueries('counters')
            }, 1200)
        }
    })

    const refreshCounters = () => {
        getCountersMutation.mutate()
    }

    return(
        <div>
            <Button
                text={ refresh ? <><IoRefresh className="font-size-22 align-sub"/> Refreshing…</> : <IoRefresh className="font-size-22"/> }
                color="text"
                defaultStyle={ false }
                className={ `cursor-pointer ${ refresh ? 'text-orange' : 'text-dark-silver' }`}
                onClick={ () => refreshCounters() }
            />
        </div>
    )
}

export default Items
