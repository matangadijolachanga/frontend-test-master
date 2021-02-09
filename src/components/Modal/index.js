import React from 'react'
import AntdModal from 'antd/lib/modal'
import 'antd/lib/modal/style/css'
import './index.css'
import { IoClose } from 'react-icons/io5'

const Modal = ({ width, visible, title, centered, wrapClassName, closable, setVisible, children, bodyStyle }) => {

    return(
        <>
        <AntdModal 
            width={ width }
            title={ title }
            visible={ visible }
            footer={ null }
            centered={ true }
            onCancel={ setVisible }
            closable={ closable }
            maskClosable={ false }
            closeIcon={ <IoClose/> }
            header={ false } 
            bodyStyle={ bodyStyle }
            wrapClassName={ wrapClassName }
        >
            { children }
        </AntdModal>
        </>
    )
}

Modal.defaultProps = {
    width: 485,
    title: false,
    closable: true,
    centered: true,
    wrapClassName: ''
}

export default Modal
