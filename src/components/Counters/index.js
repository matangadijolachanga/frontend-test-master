import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { getCounters } from '../../api/counterAPI'
import { Container, Row, Col } from 'react-grid'
import { BsSearch } from 'react-icons/bs'
import { isEmpty, isNotEmpty, arrayIsEmpty, arrayIsNotEmpty } from '../../helper/validations'
import { searchCounters } from '../../helper/counters'
import Input from '../Input'
import Button from '../Button'
import Items from './Items'
import Bar from '../Bar'
import Counter from './Counter'
import NoCounters from './NoCounters'
import ErrorCounters from './ErrorCounters'
import Refresh from './Refresh'
import Loading from '../Loading'
import shortid from 'shortid'

const Counters = () => {
    
    const { data, isLoading, isError } = useQuery('counters', getCounters)
    
    const [counters, setCounters] = useState([])
    const [search, setSearch] = useState('')

    const searchCounter = value => {
        setSearch(value)
        if(isEmpty(value)){
            setCounters(data.data)
        }
        else {
            const counters_found = searchCounters(value, data.data, 'title')
            setCounters(counters_found)
        }
    }
    
    useEffect(() => {
        if(!isLoading) setCounters(data.data)
    }, [isLoading, data])

    return(
        <>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={5}>
                    <Input 
                        prefix={ <BsSearch/> }
                        value={ search }
                        type={ isNotEmpty(search) ? 'search' : 'text' }
                        onChange={ (e) => searchCounter(e.target.value) }
                        placeholder="Search Counters"
                        disabled={ arrayIsEmpty(counters) && isEmpty(search) }
                    />
                    { isNotEmpty(search) && (
                        <Button 
                            color="white" 
                            text="Cancel"
                            className="align-sub"
                            onClick={ () => searchCounter('') }
                        /> 
                    )}
                </Col>
            </Row>
            <Row className="justify-content-center">
                { !isLoading && !isError && (
                    <Col xs={12} md={8}>
                        <div className="d-flex align-items-center mt-4 mb-2">
                            <Items counters={ counters }/> 
                            <Refresh/>
                        </div>
                    </Col> 
                )}
                <Col xs={12} md={8}>

                    { isLoading && <Loading/> }
                    
                    { isError && <ErrorCounters/> }
                    
                    { !isLoading && arrayIsEmpty(counters) && <NoCounters noResults={ isNotEmpty(search) }/> }
                    
                    { !isLoading && arrayIsNotEmpty(counters) && counters.map(counter => (
                        <Counter 
                            key={ shortid.generate() } 
                            id={ counter.id }
                            title={ counter.title }
                            count={ counter.count }
                            countZero={ counter.count === 0 }
                        />
                    ))}

                </Col>
            </Row>
        </Container>

        <Bar/>
        </>
    )
}

export default Counters
