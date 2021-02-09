import axios from 'axios'

export const createInstance = config => axios.create(config)

export const handleError = error => {
    
    const { status, message } = error
    
    switch(status){
        case 401:
            console.error({ status, message })
        case 403:
            console.error({ status, message })
        case 404:
            console.error({ status, message })
        case 500:
            console.error({ status, message })
        default:
            console.error({ status, message })
    }
}