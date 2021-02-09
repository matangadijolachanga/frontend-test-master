import { createInstance } from '../services/axios'

const instance = createInstance({
    baseURL: '/api/v1/counter',
    headers: {
        Accept: 'application/json'
    }
})

export const getCounters = () => instance.get()

export const addCounter = title => instance.post('', { title })

export const incrementCounter = id => instance.post('/inc', { id })

export const decrementCounter = id => instance.post('/dec', { id })

export const deleteCounter = id => instance.delete('', { data: { id }})
