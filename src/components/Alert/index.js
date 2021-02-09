import React, { useState } from 'react'
import Modal from '../Modal'
import Button from '../Button'

const Alert = (props) => {

    const [open, setOpen] = useState(true)

    return(
        <Modal
            title={ false }
            visible={ open }
            closable={ false }
            width={309}
            wrapClassName="ant-modal-alert"
        >
            <div className="text-center">
                
                <h1 className="text-center">{ props.title }</h1>
                <p className="mb-3">{ props.textError }</p>
                
                { props.btnDismiss && (<Button 
                    color={ props.btnDismissColor } 
                    text={ props.btnDismissText }
                    onClick={ () => setOpen(!open ) }
                />)}

                { props.btnAction && (<Button 
                    color={ props.btnActionColor } 
                    className={ props.btnActionClassName }
                    text={ props.btnActionText }
                    onClick={ props.btnActionOnClick }
                />)}
            </div>

        </Modal>
    )
} 

Alert.defaultProps = {
    btnDismiss: true,
    btnDismissColor: 'primary',
    btnDismissText: 'Dismiss'
}

export default Alert
