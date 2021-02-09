import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { BrowserRouter } from 'react-router-dom'
import { CounterProvider } from './context/Counter'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
    <QueryClientProvider client={ queryClient }>
        <BrowserRouter>
            <CounterProvider>
                <App/>
            </CounterProvider>
        </BrowserRouter>
    </QueryClientProvider>
    ,document.getElementById('root')
)
