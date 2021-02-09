import React, { useState } from 'react'
import { arrayMoreThanOneItem } from '../../../helper/validations'
import Button from '../../Button'
import Popover from '../../Popover'
import { IoShareOutline } from 'react-icons/io5'
import ShareSVG from '../../../assets/images/share.svg'
import shortid from 'shortid'
import './index.css'

const ShareCounter = ({ counters }) => {
    
    const [popover, setPopover] = useState(false)

    const content = () => (
        <div className="d-flex">
            <div>
                <p className="font-size-22 font-weight-600 mb-2">Share { arrayMoreThanOneItem(counters.data) ? `${ counters.total } counters` : '1 counter' }</p>
                <Button 
                    color="secondary" 
                    text="Copy"
                    onClick={ () => setPopover(!popover) }
                />
            </div>
            <div className="share-list ml-2">
                <div><img src={ ShareSVG } height={ 100 }/></div>
                <div className="list">
                    { counters.data.map(counter => (
                        <p key={ shortid.generate() } className="font-size-8 font-weight-600 mb-2">{ counter.count } x { counter.title }</p>
                    ))}
                </div>
            </div>
        </div>
    )

    return(
        <div>
            <Popover content={ content } visible={ popover }>
                <Button 
                    color="text" 
                    text={ <IoShareOutline/> } 
                    onClick={ () => setPopover(!popover) }
                    />
            </Popover>
        </div>
    )
}

export default ShareCounter
