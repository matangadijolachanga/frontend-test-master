import React, { useState } from 'react'
import { useQueryClient, useMutation } from 'react-query'
import { addCounter } from '../../../api/counterAPI'
import { GoPlus } from 'react-icons/go'
import Button from '../../Button'
import Modal from '../../Modal'
import Loading from '../../Loading'
import Examples from '../../Examples'
import Input from '../../Input'
import Alert from '../../Alert'

const AddCounter = () => {
    
    const queryClient = useQueryClient()

    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const addCounterMutation = useMutation(title => addCounter(title), {
        onMutate: async () => {
            setLoading(true)
            setError(false)
        },
        onError: () => {
            setLoading(false)
            setError(true)
        },
        onSuccess: () => {
            // 1.5 seconds were added to display the "Loading" component
            setTimeout(() => {
                setInput('')
                setLoading(false)
                queryClient.invalidateQueries('counters')
            }, 1500)
        }
    })

    const onSubmit = (e) => {
        e.preventDefault()
        addCounterMutation.mutate(input)
    }

    return(
        <div>
            <Modal 
                title="Create counter"
                visible={ openModal } 
                centered={ false }
                setVisible={ () => setOpenModal(!openModal) }
            >
                <form onSubmit={ (e) => onSubmit(e) } autoComplete="off">

                    <Input
                        label="Name"
                        name="counter"
                        value={ input }
                        placeholder="Cups of coffee"
                        disabled={ loading }
                        onChange={ e => setInput(e.target.value) }
                        />
                    
                    <div className="add-header">
                        <Button
                            text="Save"
                            color="primary"
                            onClick={ (e) => onSubmit(e) }
                            disabled={ !input || loading }
                            />
                    </div>
                </form>
                
                <Examples/>
                
                { loading && <Loading/> }
            </Modal>
            
            <Button 
                color="primary" 
                text={ <GoPlus/> } 
                onClick={ () => setOpenModal(!openModal) }
            />

            { error && <Alert 
                title="Couldn’t create counter"
                textError="The Internet connection appears to be offline."
            /> }
        </div>
    )
}

export default AddCounter
