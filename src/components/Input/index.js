import React from 'react'
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css'
import './index.css'

const In = (props) => (
    <>
        { !props.label || (
            <label 
                htmlFor={ props.name }
                className="text-dark font-weight-500 font-size-17">{ props.label }
            </label> 
        )}
        <Input 
            className={`input-${ props.type }`}
            prefix={ props.prefix }
            width={ props.width }
            type={ props.type }
            name={ props.name }
            value={ props.value }
            placeholder={ props.placeholder }
            disabled={ props.disabled }
            onChange={ props.onChange }
        />
    </>
)

In.defaultProps = {
    type: 'text',
    value: '',
    placeholder: '',
    disabled: false,
    onChange: () => {},
    label: false,
    prefix: false
}

export default In