import React, { useState } from 'react'
import Modal from '../Modal'
import Data from './examples.json'
import MenuScroll from '../MenuScroll'
import Tag from '../Tag'
import shortid from 'shortid'

const Examples = () => {
    
    const [openModal, setOpenModal] = useState(false)

    return(
        <>                       
            <Modal 
                title="Examples"
                visible={ openModal } 
                setVisible={ () => setOpenModal(!openModal) }
                bodyStyle={{ padding: '20px 0 20px 20px' }}
            >
                <p className="text-dark-silver font-size-15 font-weight-400">Select an example to add it to your counters.</p>

                { Object.keys(Data).map(key => {
                    return(
                        <div key={ shortid.generate() } style={{ margin: '30px 0' }}>
                            <p className="text-dark font-size-17 font-weight-500">{ key }</p>
                            <MenuScroll>
                                { Data[key].map(value => <Tag key={ shortid.generate() } text={ value }/>) }
                            </MenuScroll>
                        </div>
                    )
                })}
            </Modal>
            <p className="text-dark-silver font-size-15 font-weight-400">Give it a name. Creative block? See <span onClick={ () => setOpenModal(!openModal) } className="font-weight-600 cursor-pointer"><u>examples</u></span>.</p>
        </>
    )
}

export default Examples
