import React, { useContext } from 'react'
import CounterContext from '../../context/Counter'
import { Container, Row, Col } from 'react-grid'
import AddCounter from '../Counters/AddCounter'
import ShareCounter from '../Counters/ShareCounter'
import DeleteCounter from '../Counters/DeleteCounter'
import { arrayIsNotEmpty } from '../../helper/validations'
import './index.css'

const Bar = () => {
    
    const { selected_counters } = useContext(CounterContext)

    return(
        <div className="add-bar">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <Row className="justify-content-between">
                            <Col xs="auto">
                                <div className="d-flex">
                                    { arrayIsNotEmpty(selected_counters.data) && <DeleteCounter counters={ selected_counters }/> }
                                    { arrayIsNotEmpty(selected_counters.data) && <ShareCounter counters={ selected_counters }/> }
                                </div>
                            </Col>
                            <Col xs="auto">
                                <AddCounter/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bar
